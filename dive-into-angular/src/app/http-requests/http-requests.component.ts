import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this._postService.createAndStorePosts(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this._postService.fetchPosts().subscribe((post: Post[]) => {
      this.loadedPosts = post
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request
  }

}
