import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject, Subscription, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnDestroy {
  url: string = 'https://diveintoangular-default-rtdb.firebaseio.com/';
  error: Subject<string> = new Subject<string>();
  sub!: Subscription;

  constructor(private _http: HttpClient) { }

  createAndStorePosts(data: Post): void {
    let postData: Post = data;
    this.sub = this._http.post<Post>(this.url + 'posts.json', postData).subscribe(() => { }, error => this.error.next(error.message));
  }

  fetchPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this._http.get<{ [key: string]: Post }>(this.url + 'posts.json', {
      headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      // params: new HttpParams().set('print', 'pretty')
      params: searchParams
    })
      .pipe(map(post => {
        let postArray: Post[] = [];
        for (let key in post) {
          postArray.push({ ...post[key], id: key });
        }
        return postArray;
      }),
        catchError((errorRes: Error) => {
          // Do something with error, send to db, to analitics etc.
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<Object> {
    return this._http.delete(this.url);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}