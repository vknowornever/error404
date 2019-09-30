import { Component, OnInit } from '@angular/core';
import { Kbarticles } from '../kbarticles';
import { ServiceService } from '../service.service';
import { PagerInfo } from '../pager-info';
import { FormGroup, FormControl } from '@angular/forms';
//import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-display-articles',
  templateUrl: './display-articles.component.html',
  styleUrls: ['./display-articles.component.css']
})
export class DisplayArticlesComponent implements OnInit {
kbarticles:Kbarticles;
arr:Kbarticles[];
all_articles:Kbarticles[];
page:number =1;
Page: PagerInfo;
totalPages: number;
totalItems: number;
currentPage: number;
editarticle:Kbarticles;
displayArticle: Kbarticles;
edit:boolean=true;
//editForm: FormGroup;
catid: number;
text2:string;

 articleId: number;
 articleName: string;
content: string;
previewContent: string;
categoryId: number;
categoryName: string;
createdBy: number;
 createdByName: string;
 createdDate: string;
 modifiedBy: number;
  modifiedByName: string;
  modifiedDate: string;
  editform:FormGroup;

error404:boolean=true;
  constructor(public _data: ServiceService) { }

  ngOnInit() {

    this.getArticles();
    this.editform=new FormGroup({
      //editarticleName:new FormControl(null),
      //editCreatedDate:new FormControl(null),
      //editCategoryName:new FormControl(null),
      //editCreatedByName:new FormControl(null),
        articleId: new FormControl(null),
      articleName: new FormControl(null),
      content: new FormControl(null),
      previewContent: new FormControl(null),
      categoryId: new FormControl(null),
      categoryName: new FormControl(null),
      createdBy: new FormControl(null),
      createdByName: new FormControl(null),
      createdDate: new FormControl(null),
      modifiedBy:new FormControl(null),
      modifiedByName:new FormControl(null),
      modifiedDate: new FormControl(null)

    })

  }

getArticles() {
    this._data.getAllKbArticle().subscribe(

        (data: Kbarticles[]) => {
        this.error404=false;
console.log(data);
this.Page = data['pagerInfo'];
this.totalPages = this.Page.totalPages;
this.totalItems = this.Page.totalItems;
            this.arr = data;
            this.all_articles=this.arr['kbArticles'];

            console.log(this.all_articles);
        },
    );

}
// onReadMore(item){
//   this._data.getAllKbArticle().subscribe(

//     (data: Kbarticles[]) => {
// console.log(data);
//         this.arr = data;
//         this.all_articles = this.arr['kbArticles'];
//         for(var i=0;i<this.all_articles.length;i++){
//         if(this.all_articles[i].articleId==item.articleId)
//       console.log(this.all_articles[i]);
//       //  this.editarticle=this.all_articles[i];
//         }
//     },
// );

//}
onEditArticle(item:Kbarticles){
  console.log(item.articleId);
  this._data. getArticleById(item.articleId).subscribe(

    (data: Kbarticles[]) => {
console.log(data);
        this.arr = data;
      //  this.all_articles=this.arr['kbArticles'];
         this.editarticle=this.arr['kbArticles'];
         console.log(this.editarticle);
      //   for(var i=0;i<=this.all_articles.length;i++){
      //   if(this.all_articles[i].articleId==item.articleId)
      // console.log(this.all_articles[i]);
      // this.edit=true;
      //   this.editarticle=this.all_articles[i];
      //   console.log("editArticle"+this.editarticle);


        this.editform.patchValue ({
          'articleId':data['articleId'],
          'articleName':data['articleName'],
          'createdDate':data['createdDate'],
          'categoryName':data['categoryName'],
          'createdByName':data['createdByName'],
          'categoryId':data['categoryId'],
        })
     //   }
        console.log(this.editform);

    },

);



}
loadPage(number: number) {

  number = this.page;

console.log(this.page);

  if (number != 0) {

      this._data.getPageByNumber(this.page).subscribe(

          (data: Kbarticles[]) => {

              this.arr = data;
                  console.log("pagedata")
              window.scroll(0, 0);

              this.all_articles = this.arr['kbArticles'];

          });

  }





}

onSearchClick(value) {
  let number=this.page;
  if (value != "") {
      this._data.getArticleBySearch(value,number).subscribe(
          (data: Kbarticles[]) => {
              this.arr = data;
              this.all_articles = this.arr['kbArticles'];



          });
        }
}
addArticle()
{
this.editform.reset();

}



update(form:FormGroup){
  console.log("updateWorks");
  this._data.updateData(form).subscribe();
}

onsubmit(form:FormGroup){
  this._data.updateData(form).subscribe();
}

}
