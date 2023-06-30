
import { Component } from '@angular/core';
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
  error: string = '';

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.error.subscribe((errorMessage: string) => this.error = errorMessage);
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
    }, (error: Error) => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this._postService.deletePosts().subscribe(() => this.loadedPosts = [], (error: Error) => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onHandleError(): void {
    this.error = '';
  }
}