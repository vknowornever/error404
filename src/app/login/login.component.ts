import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('f',{static:false})form:NgForm;
  constructor(public route:Router ) { }

  ngOnInit() {
  }
  onSubmit(){
   console.log(this.form);
   if(this.form.value.username=='vinay'&& this.form.value.email=='vinaypk07@gmail.com'){
    this.route.navigate(['display']);
   }
  }
}
