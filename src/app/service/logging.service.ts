import { Injectable } from '@angular/core';
// defining class LoggerService for displaying differnt message 
@Injectable()
export class LoggingService {

  constructor() { }

  info(textMessage: string) {
    console.info(textMessage);
  };

  log(textMessage: string) {
    console.log(textMessage);
  };

  clear(textMessage: string) {
    console.clear();
  }
  warning(textMessage: string) {
    console.warn(textMessage);
  };



}

