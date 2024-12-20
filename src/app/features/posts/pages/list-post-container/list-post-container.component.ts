import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { IPost } from '@core/interfaces';
import { JsonPlaceholderService } from '@core/services/json-placeholder.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-post-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-post-container.component.html',
  styleUrl: './list-post-container.component.scss'
})
export class ListPostContainerComponent implements OnInit {
  
  posts$: BehaviorSubject<any[]> = new BehaviorSubject<IPost[]>([]);
  private posts: any[] = [];
  private currentPage = 1;
  private readonly pageSize = 10;
  isLoading = false;
  hasMorePosts = true;

  private readonly jsonPlaceholderService = inject(JsonPlaceholderService);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    if (this.isLoading || !this.hasMorePosts) return;

    this.isLoading = true;

    this.jsonPlaceholderService.getPostsWithPage(this.currentPage, this.pageSize).subscribe({
      next: (newPosts) => {
        if (newPosts.length < this.pageSize) {
          this.hasMorePosts = false;
        }
        this.posts = [...this.posts, ...newPosts];
        this.posts$ = new BehaviorSubject(this.posts);
        this.currentPage++;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading posts:', error);
        this.isLoading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;
    
    if (scrollPosition >= bottomPosition - 200 && !this.isLoading) {
      this.loadPosts();
    }
  }

}
