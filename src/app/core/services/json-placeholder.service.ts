import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  private readonly http = inject(HttpClient);
 
  getPosts(): Observable<IPost[]> {
    console.log('get http')
    return this.http.get<IPost[]>(`${this.baseUrl}/posts`);
  }

  getPostsWithPage(page: number, limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts?_page=${page}&_limit=${limit}`);
  }
}
