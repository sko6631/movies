import { has } from 'lodash';
import { SelectQueryBuilder } from 'typeorm';

import { ArticleEntity } from './article.entity';
import { ArticlesParams } from './articles.params';
import { AbstractFilter } from '../../common/abstract.filter';

export class ArticlesFilter extends AbstractFilter<ArticleEntity, ArticlesParams> {
  protected readonly DEFAULT_PAGINATED_QUERY_LIMIT = 100;
  buildFilters(qb: SelectQueryBuilder<ArticleEntity>, params: ArticlesParams, shouldIntegratePagination: boolean) {
    if (has(params, 'limit') && shouldIntegratePagination) {
      this.paginate(qb, params.offset, params.limit);
    }
  }

  protected paginate(
    queryBuilder: SelectQueryBuilder<ArticleEntity>,
    offset: number,
    limit: number = this.DEFAULT_PAGINATED_QUERY_LIMIT
  ): void {
    queryBuilder.take(limit);
    queryBuilder.skip(offset);
  }
}
