/* eslint-disable @typescript-eslint/member-ordering */
import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Article } from '../../types/article';
import { ArticleEntity } from '../articles/article.entity';

@Entity({ name: 'Checkout' })
export class CheckoutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => ArticleEntity)
  @JoinTable({ name: 'Checkout_article' })
  items: Article[];
}
