import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ChildComponent } from './login/login/child/child.component';
import { TableComponent } from './table/table.component';
import { HoverDirective } from './table/hover.directive';
import { ArraylistComponent } from './arraylist/arraylist/arraylist.component';
import { FirstService } from './service/firstservice.service';
import { DropdownService } from './service/dropdown.service';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    ChildComponent,
    TableComponent,
    HoverDirective,
    ArraylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [DropdownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
