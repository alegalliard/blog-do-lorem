import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentsUrl = 'http://jsonplaceholder.typicode.com/comments?';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }

  getCommentsFromPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentsUrl}postId=${postId}`);
  }
}
