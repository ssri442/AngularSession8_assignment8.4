import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ChildComponent } from './login/login/child/child.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    ChildComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
