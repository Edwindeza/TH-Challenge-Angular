import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IPost } from '@core/interfaces';
import { JsonPlaceholderService } from '@core/services/json-placeholder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-post-container.component.html',
  styleUrl: './list-post-container.component.scss'
})
export class ListPostContainerComponent {
  
  posts$: Observable<IPost[]>;

  private readonly jsonPlaceholderService = inject(JsonPlaceholderService);

  constructor() {
    console.log('get posts');
    this.posts$ = this.jsonPlaceholderService.getPosts();
  }

}
