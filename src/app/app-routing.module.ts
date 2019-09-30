import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { DisplayArticlesComponent } from './display-articles/display-articles.component';


const routes: Routes = [
  {path:"login" ,component: LoginComponent},
  {path:"display" ,component: DisplayArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
