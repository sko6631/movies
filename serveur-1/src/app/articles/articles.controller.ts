import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ArticlesParams } from './articles.params';
import { ArticlesService } from './articles.service';
import { Article } from '../../types/article';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll(@Query() params: ArticlesParams): Observable<Article[]> {
    return this.articlesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): Observable<Article> {
    return this.articlesService.findOne(id);
  }
}
