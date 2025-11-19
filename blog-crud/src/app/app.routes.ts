import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/posts-list/posts-list').then(m => m.PostsListComponent)
  },
  {
    path: 'post/:id', // <-- Faltaba :id
    loadComponent: () =>
      import('./components/post-detail/post-detail').then(m => m.PostDetailComponent)
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./components/post-form/post-form').then(m => m.PostFormComponent)
  },
  {
    path: 'edit/:id', // <-- Faltaba :id
    loadComponent: () =>
      import('./components/post-form/post-form').then(m => m.PostFormComponent)
  }
];