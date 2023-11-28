import { Article } from './article';

export interface Checkout {
  id: number;
  items: Article[];
}
