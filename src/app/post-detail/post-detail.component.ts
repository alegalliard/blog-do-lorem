import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { Post } from '../models/post';
import { PostsService } from '../services/posts-service.service';
import { UserService } from '../services/user.service';
import { CommentsService } from '../services/comments.service';

import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, switchMap, flatMap, delay, tap, startWith, merge, mergeMap} from 'rxjs/operators';

// import { User } from '../user/user';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  result

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postsService: PostsService,
    private userService: UserService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.getPost();
  }



  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const comment = this.commentsService.getCommentsFromPost(id);
    const postAndUser = this.postsService.getPost(id)
                .pipe(
                  mergeMap(post => this.userService.getUser(post.userId),
                        (post, user) => {
                          return {post: post, user: user}
                        }),
                )

    forkJoin([postAndUser, comment])
      .subscribe(results => {
        console.log('POST => ', results[0])
        console.log('COMMENTS => ', results[1])
        this.result = {
          content: results[0],
          comments: results[1]
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

}
