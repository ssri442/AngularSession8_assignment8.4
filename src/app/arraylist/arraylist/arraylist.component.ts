import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../service/firstservice.service';

@Component({
  selector: 'app-arraylist',
  templateUrl: './arraylist.component.html',
  styleUrls: ['./arraylist.component.css'],
  providers: [FirstService]
})
export class ArraylistComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];

  constructor(private _firstService: FirstService) { }

  ngOnInit() { }

// declaring submit function 
  submit(Name: string, LastName: string) {
    let model = {
      firstName: Name,
      lastName: LastName
    }
    this._firstService.addGroup(model);
    this.arrayList = this._firstService.getList();
  }
}
