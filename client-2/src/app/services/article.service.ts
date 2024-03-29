// articles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article'

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'https://localhost:7297';

  constructor(private http: HttpClient) { }

  getArticles(page: number , pageSize: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Article[]>(`${this.apiUrl}/api/articles`, { params });
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/api/articles/${id}`);
  }

  // Ajoutez des méthodes pour la création, la mise à jour et la suppression d'articles
}
