import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap, concatMap, pluck, mergeMap, concat, mergeAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
    ) { }

  getPosts(): Observable<Post[]> {
    //usar o mergeMap ou o switchMap pra juntar os dois serviços
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  private log(message: string) {
    return message;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
