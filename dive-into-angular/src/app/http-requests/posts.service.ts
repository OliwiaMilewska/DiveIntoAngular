import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'https://diveintoangular-default-rtdb.firebaseio.com/';
  constructor(private _http: HttpClient) { }

  createAndStorePosts(data: Post): void {
    let postData: Post = data;
    this._http.post<Post>(this.url + 'posts.json', postData).subscribe();
  }

  fetchPosts(): Observable<Post[]> {
    return this._http.get<{ [key: string]: Post }>(this.url + 'posts.json')
      .pipe(
        map(post => {
          let postArray: Post[] = [];
          for (let key in post) {
            postArray.push({ ...post[key], id: key });
          }
          return postArray;
        })
      );
  }
}
