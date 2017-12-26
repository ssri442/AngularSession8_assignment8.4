import { Component } from '@angular/core';

@Component({
  selector: 'my-app-component',
  template:  ` <div class="container">
  <div id = login class="form-group">
  <input type="text" class="form-control"
  placeholder="FirstName"
  [(ngModel)] ="FirstName">
 
  <button type="button" class="btn btn-primary pull-center">Login </button>
  </div>
  </div>
  `,
   styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'app';
   
}
