import { Routes } from '@angular/router';
import { ListPostContainerComponent } from './features/posts/pages/list-post-container/list-post-container.component';

export const routes: Routes = [

  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: ListPostContainerComponent },
  { path: '**', redirectTo: 'posts' },
];
