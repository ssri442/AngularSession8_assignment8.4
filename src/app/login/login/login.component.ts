import { Component, ViewEncapsulation,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
firstname : string;
lastname : string;
title : string;
show:boolean = false;

  constructor() { }

  ngOnInit() {
    this.firstname =' Sai';
    this.lastname= ' Sri';
    this.title ='login with your cred';
    

  }
Click(){
  this.show = true;
  this.title ="Hello"+" " + this.firstname +" "+ this.lastname;
  
}
}
