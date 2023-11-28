import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map } from 'rxjs';
import { Repository } from 'typeorm';

import { ArticleEntity } from './article.entity';
import { ArticlesFilter } from './articles.filter';
import { ArticlesMapper } from './articles.mapper';
import { ArticlesParams } from './articles.params';
import { Article } from '../../types/article';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity) private articlesRepository: Repository<ArticleEntity>,
    protected readonly articlesMapper: ArticlesMapper,
    private readonly articlesFilter: ArticlesFilter
  ) {}

  findAll(params: ArticlesParams): Observable<Article[]> {
    const qb = this.articlesRepository.createQueryBuilder('articles');

    this.articlesFilter.buildFilters(qb, params, true);
    return from(qb.getMany()).pipe(map((articles: ArticleEntity[]) => this.articlesMapper.entitiesToApis(articles)));
  }

  findOne(id: number): Observable<Article> {
    return from(this.articlesRepository.createQueryBuilder('articles').where('id = :id', { id }).getOne()).pipe(
      map((article: ArticleEntity) => this.articlesMapper.entityToApi(article))
    );
  }
}
