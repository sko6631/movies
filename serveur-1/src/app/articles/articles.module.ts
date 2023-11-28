import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleEntity } from './article.entity';
import { ArticlesController } from './articles.controller';
import { ArticlesFilter } from './articles.filter';
import { ArticlesMapper } from './articles.mapper';
import { ArticlesService } from './articles.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticlesService, ArticlesMapper, ArticlesFilter],
  exports: [ArticlesMapper],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
