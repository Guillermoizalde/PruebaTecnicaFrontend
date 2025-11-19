import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { User } from '../../models/user';
import { NgIf, NgFor } from '@angular/common';

@Component({
standalone: true,
selector: 'app-post-detail',
imports: [NgIf, NgFor, RouterLink],
templateUrl: './post-detail.html'
})
export class PostDetailComponent implements OnInit {

post?: Post;
comments: Comment[] = [];
user?: User;

constructor(
private route: ActivatedRoute,
private service: PostsService
) {}

ngOnInit(): void {
const rawId = this.route.snapshot.paramMap.get('id');
const id = rawId ? +rawId : null;

if (!id) return;

this.service.getPost(id).subscribe(p => {
  this.post = p;

  if (p.userId) {
    this.service.getUser(p.userId).subscribe(u => this.user = u);
  }

  this.service.getComments(id).subscribe(c => this.comments = c);
});

}
}
