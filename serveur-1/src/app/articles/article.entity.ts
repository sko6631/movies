/* eslint-disable @typescript-eslint/member-ordering */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Article' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  tconst: string;

  @Column('varchar')
  titleType: string;

  @Column('varchar')
  primaryTitle: string;

  @Column('varchar')
  originalTitle: string;

  @Column('varchar')
  startYear: string;

  @Column('varchar')
  endYear: string;

  @Column('varchar')
  runtimeMinutes: string;

  @Column('varchar')
  genres: string;
}
