import { Component, ViewEncapsulation,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated

  
})
export class LoginComponent implements OnInit {
title : string;
name : string;
  constructor() { }

  ngOnInit() {
    this.title ='Login with your credentials';
    this.name = 'Hi Sai';

  }

}
