import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    GetAllArticles: string;
    cat:string;
    cat2:string;
    URLInsertUpdate:string;
    URLfetchDataById:string;

  constructor(private http: HttpClient, public router: Router) {
    this.GetAllArticles = "https://5c6e6059.ngrok.io/api/KB/GetArticles?getall=0&categ=1";
    this.URLInsertUpdate = 'https://5c6e6059.ngrok.io/api/KB/InsertUpdateKBAricles';
    this.URLfetchDataById = 'https://5c6e6059.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
   }

   public getAllKbArticle() {
    return this.http.get(this.GetAllArticles);
}
public getArticleById(number:number){
  return this.http.get(this.URLfetchDataById+number);
}


public getPageByNumber(number:number){
this.cat="&Page="+number;
console.log("pagination"+this.cat);
return this.http.get(this.GetAllArticles+this.cat);
}


public getArticleBySearch(value:string,number:number){
this.cat2="&Page="+number+"&SearchString="+value;
console.log(this.cat2);
return this.http.get(this.GetAllArticles+this.cat2);
}
updateData(arrData) {
  console.log(arrData);
  const body = JSON.stringify(arrData);
  const head = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(this.URLInsertUpdate, body, {headers: head});

}
}
