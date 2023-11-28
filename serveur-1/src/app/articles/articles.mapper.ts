import { Injectable, Scope } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { ArticleEntity } from './article.entity';
import { AbstractMapper } from '../../common/abstract.mapper';
import { Article } from '../../types/article';

@Injectable({ scope: Scope.TRANSIENT })
export class ArticlesMapper extends AbstractMapper<ArticleEntity, Article> {
  apiToEntity(api: Article): ArticleEntity {
    if (isEmpty(api)) {
      return null;
    }

    return {
      id: api.id,
      tconst: api.tconst,
      titleType: api.titleType,
      primaryTitle: api.primaryTitle,
      originalTitle: api.originalTitle,
      startYear: api.startYear,
      endYear: api.endYear,
      runtimeMinutes: api.runtimeMinutes,
      genres: api.genres
    };
  }

  entityToApi(entity: ArticleEntity): Article {
    if (isEmpty(entity)) {
      return null;
    }

    return {
      id: entity.id,
      tconst: entity.tconst,
      titleType: entity.titleType,
      primaryTitle: entity.primaryTitle,
      originalTitle: entity.originalTitle,
      startYear: entity.startYear,
      endYear: entity.endYear,
      runtimeMinutes: entity.runtimeMinutes,
      genres: entity.genres
    };
  }
}
