import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../service/firstservice.service';
import { DropdownService } from '../../service/dropdown.service';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-arraylist',
  templateUrl: './arraylist.component.html',
  styleUrls: ['./arraylist.component.css'],
  providers:[FirstService]
})
export class ArraylistComponent implements OnInit  {
 title ="Hi am form created by using services"
  name: string;
  lastName: string;
  arrayList: any[] = [];
  genderArray: any[] = [];

  constructor(private _firstService: FirstService,private _dropDownService: DropdownService,private _logging: LoggingService) { }

  ngOnInit() {this.genderArray = this._dropDownService.getDropDown() }

// defining submit function 
  submit(Name: string, LastName: string,Gender: string) {
    let model = {
      firstName: Name,
      lastName: LastName,
      gender: Gender
    }
    this._firstService.addGroup(model);
    this.arrayList = this._firstService.getList();
  }
}
