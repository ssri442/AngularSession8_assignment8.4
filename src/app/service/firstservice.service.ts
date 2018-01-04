import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  ArrayGroup: any[] = [];

  // Adding list of objects to the Array Group
  addGroup(arrayListDetail: any) {
    this.ArrayGroup.unshift(arrayListDetail);
  }

  //Getting the array group
  getList(): any[] {
    return this.ArrayGroup;
  }

}
