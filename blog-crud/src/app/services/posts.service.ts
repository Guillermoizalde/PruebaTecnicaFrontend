import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) {}
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/posts`);
  }
  
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/posts/${id}`);
  }
  
  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.api}/posts/${postId}/comments`);
  }
  
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${userId}`);
  }
  
  createPost(data: Post) {
    return this.http.post<Post>(`${this.api}/posts`, data);
  }
  
  updatePost(id: number, data: Post) {
    return this.http.put<Post>(`${this.api}/posts/${id}`, data);
  }
  
  deletePost(id: number) {
    return this.http.delete(`${this.api}/posts/${id}`);
  }
}