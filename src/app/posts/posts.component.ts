import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts-service.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts : Post[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts()
        .subscribe(p => this.posts = p);
  }

}
