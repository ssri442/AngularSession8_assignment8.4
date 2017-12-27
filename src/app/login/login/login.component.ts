import { Component, ViewEncapsulation,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated

  
})
export class LoginComponent implements OnInit {
firstname : string;
lastname : string;
title : string;
  constructor() { }

  ngOnInit() {
    this.firstname =' Sai';
    this.lastname= ' Sri';
    this.title ='login with your cred';

  }
Click(){
  this.title ="hi"+" " + this.firstname +" "+ this.lastname;
  
}
}
