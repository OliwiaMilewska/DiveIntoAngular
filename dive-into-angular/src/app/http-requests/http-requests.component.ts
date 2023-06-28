import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent {
  url: string = 'https://diveintoangular-default-rtdb.firebaseio.com/';
  loadedPosts = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this._http.post(this.url + 'posts.json', postData).subscribe();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    this._http.get(this.url + 'posts.json')
      .pipe(map((response: any) => {
        let postArray = [];
        for (let key in response) {
          postArray.push({ ...response[key], id: key });
        }
        return postArray;
      })
      )
      .subscribe(responseData => console.log(responseData));
  }

  onClearPosts() {
    // Send Http request
  }

}
