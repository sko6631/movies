// articles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private apiUrl = 'http://localhost:7297/api';

  constructor(private http: HttpClient) {}

  getArticles(offset: number, limit: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get<Article[]>(`${this.apiUrl}/articles`, { params });
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/articles/${id}`);
  }

  // Ajoutez des méthodes pour la création, la mise à jour et la suppression d'articles
}
