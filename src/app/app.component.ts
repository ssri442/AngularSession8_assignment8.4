import { Component , ViewEncapsulation,OnInit} from '@angular/core';

@Component({
  selector: 'my-app-component',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   
})
export class RootComponent {
  title = "I am the text coming through string interpolation";
   
}
