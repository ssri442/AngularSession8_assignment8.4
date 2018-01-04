import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service'

@Injectable()
export class FirstService {

  ArrayGroup: any[] = [];
  constructor(private _logging: LoggingService) { }

  // Adding list of objects to the Array Group
  addGroup(arrayListDetail: any) {
    this._logging.info("Adding Data");
    this.ArrayGroup.unshift(arrayListDetail);
  }

  //Getting the array group
  getList(): any[] {
    this._logging.info("Retriving Data");
    return this.ArrayGroup;
  }

}
