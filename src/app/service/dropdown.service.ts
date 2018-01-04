import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  private genderArray: any[] = [];
  constructor() { }
//Creating get function to return values populated in dropdown
  getDropDown(): any[] {
    return this.genderArray = [{
      id: 1,
      value: 'Mr'
    },
    {
      id: 2,
      value: 'Mrs'
    }
    ]
  }

}

  
