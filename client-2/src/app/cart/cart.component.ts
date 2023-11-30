// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ArticlesService } from '../services/article.service';
import { Article } from '../models/article';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: number[] = [];
  articles: Article[] = [];

  constructor(
    private cartService: CartService,
    private articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.articles = []
    this.cartItems = this.cartService.getCartItems();

    // Use forkJoin to wait for all requests to complete before updating the view
    forkJoin(
      this.cartItems.map((itemId) => this.articleService.getArticle(itemId))
    ).subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      },
      (error) => {
        console.error('Error loading articles:', error);
      }
    );
  }

  
  clearCart(): void {
    this.cartService.clearCart();
    this.loadCartItems(); // Refresh the cart items after clearing
  }
}
