// cart.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  getCartItems(): number[] {
    const cartItemString: string | null = localStorage.getItem('cart');
    return cartItemString ? JSON.parse(cartItemString) : [];
  }
  clearCart(): void {
    localStorage.removeItem('cart');
  }
}
