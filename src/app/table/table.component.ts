import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  row : Object[];
  count=-1;

  constructor() {
   this.row= [ {Name:"John",Age:"30"},{Name:"Tom",Age:"40"},{Name:"Pip",Age:"50"}];

   }
}
