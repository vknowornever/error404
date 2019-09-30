import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DisplayArticlesComponent } from './display-articles/display-articles.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SearcharticleComponent } from './searcharticle/searcharticle.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayArticlesComponent,
    TopnavComponent,
    SearcharticleComponent,
    LoginComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
