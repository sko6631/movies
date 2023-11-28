// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class AbstractMapper<ENTITY_MODEL, API_MODEL> {
  abstract apiToEntity(apiModel: API_MODEL): ENTITY_MODEL;

  apisToEntities(apis: API_MODEL[]): ENTITY_MODEL[] {
    return apis.map((apiModel: API_MODEL) => this.apiToEntity(apiModel));
  }

  entitiesToApis(entities: ENTITY_MODEL[]): API_MODEL[] {
    return entities.map((entity: ENTITY_MODEL) => this.entityToApi(entity));
  }

  abstract entityToApi(entity: ENTITY_MODEL): API_MODEL;
}
