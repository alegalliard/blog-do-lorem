import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: PostsComponent,
    data: {
      title: 'Postagem',
      animation: 'DetailPage'
    }
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
    data: {
      title: 'Detalhes da Postagem',
      animation: 'PostsPage'
    }
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
