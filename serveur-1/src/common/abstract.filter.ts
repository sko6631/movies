import { SelectQueryBuilder } from 'typeorm';

enum SortingTypeEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export abstract class AbstractFilter<ENTITY, PARAMS> {
  protected readonly DEFAULT_PAGINATED_QUERY_LIMIT = 100;

  abstract buildFilters(
    queryBuilder: SelectQueryBuilder<ENTITY>,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    params: PARAMS,
    shouldBePaginated?: boolean
  ): void;

  protected andWhereInStatement(
    queryBuilder: SelectQueryBuilder<ENTITY>,
    filters: {
      entityProperty: string;
      namedParamName: string;
      params?: string[] | number[] | string | number;
    }
  ): void {
    const param = {};
    param[filters.namedParamName] = filters.params;
    if (filters.params) {
      queryBuilder.andWhere(`${filters.entityProperty} IN (:...${filters.namedParamName})`, param);
    }
  }

  protected andWhereLikeStatement(
    queryBuilder: SelectQueryBuilder<ENTITY>,
    filters: {
      entityProperty: string;
      namedParamName: string;
      param?: string;
    }
  ): void {
    if (filters.param) {
      const whereObjectParameter = {};
      whereObjectParameter[filters.namedParamName] = `%${filters.param}%`;
      queryBuilder.andWhere(`LOWER(${filters.entityProperty}) LIKE LOWER(:${filters.namedParamName})`, whereObjectParameter);
    }
  }

  protected order(
    entityName: string,
    queryBuilder: SelectQueryBuilder<ENTITY>,
    inputCriteria: string,
    possibleOrderingValues: string[]
  ): void {
    const order: string = inputCriteria.substring(0, 1).replace(/\s/g, '');
    if (order === '-') {
      const criteria = inputCriteria.substring(1, inputCriteria.length);
      if (possibleOrderingValues.includes(criteria)) {
        this.orderBy(queryBuilder, `${entityName}.${criteria}`, SortingTypeEnum.DESC);
      } else {
        throw new Error(criteria + ' is not a possible ordering option.');
      }
    } else {
      if (possibleOrderingValues.includes(inputCriteria)) {
        this.orderBy(queryBuilder, `${entityName}.${inputCriteria}`, SortingTypeEnum.ASC);
      } else {
        throw new Error(inputCriteria + ' is not a possible ordering option.');
      }
    }
  }

  protected paginate(queryBuilder: SelectQueryBuilder<ENTITY>, offset: number, limit: number = this.DEFAULT_PAGINATED_QUERY_LIMIT): void {
    queryBuilder.take(limit);
    queryBuilder.skip(offset);
  }

  private orderBy(queryBuilder: SelectQueryBuilder<ENTITY>, propertyName: string, order: SortingTypeEnum): void {
    if (propertyName) {
      queryBuilder.addOrderBy(propertyName, order);
    }
  }
}
