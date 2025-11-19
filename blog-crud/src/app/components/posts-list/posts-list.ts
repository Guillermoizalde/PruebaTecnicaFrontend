import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
standalone: true,
selector: 'app-posts-list',
imports: [NgFor, RouterLink],
templateUrl: './posts-list.html'
})
export class PostsListComponent implements OnInit {

posts: Post[] = [];

constructor(private service: PostsService) {}

delete(id: number): void {
  if (!confirm('¿Estás seguro de eliminar este post?')) return;

  this.service.deletePost(id).subscribe(() => {
    this.posts = this.posts.filter(p => p.id !== id);
  });
}


ngOnInit(): void {
this.service.getPosts().subscribe(data => this.posts = data);
}
}
