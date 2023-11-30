import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticlesService} from '../services/article.service'
import { PageEvent } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    articles: Article[] = [];
    totalItems: number = 0;
    pageSize: number = 20;  // Set the pageSize to 20
    pageIndex: number = 0;
  
    constructor(private articlesService: ArticlesService) { }
  
    ngOnInit(): void {
      this.loadArticles();
    }
  
    onPageSizeChange(): void {
      this.pageIndex = 0; // Reset to the first page when changing the page size
      this.loadArticles();
    }
    loadArticles(): void {
      this.articlesService.getArticles(this.pageIndex + 1, this.pageSize).subscribe(
        (data: Article[]) => {
          this.articles = data;
        }
      );
    }

    addToCart(articleId: number): void {
      // Ajoutez l'article au panier (local storage)
      let cartItems: number[] = JSON.parse(localStorage.getItem('cart') || '[]');
      cartItems.push(articleId);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  
    onPageChange(event: PageEvent): void {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadArticles();
    }
  }