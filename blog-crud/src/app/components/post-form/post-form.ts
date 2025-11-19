import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
standalone: true,
selector: 'app-post-form',
imports: [FormsModule],
templateUrl: './post-form.html'
})
export class PostFormComponent implements OnInit {

post: Post = { userId: 1, title: '', body: '' };
editing = false;

constructor(
private route: ActivatedRoute,
private router: Router,
private service: PostsService
) {}

ngOnInit(): void {
const rawId = this.route.snapshot.paramMap.get('id');
const id = rawId ? +rawId : null;

if (id) {
  this.editing = true;
  this.service.getPost(id).subscribe(p => this.post = p);
}

}

save() {
if (this.editing) {
this.service.updatePost(this.post.id!, this.post).subscribe(() => {
alert('Post actualizado');
this.router.navigate(['/']);
});
} else {
this.service.createPost(this.post).subscribe(() => {
alert('Post creado');
this.router.navigate(['/']);
});
}
}
}
