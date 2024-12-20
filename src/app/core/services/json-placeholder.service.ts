import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IUser } from '../interfaces';

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

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }
}
