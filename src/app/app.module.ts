import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ChildComponent } from './login/login/child/child.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    ChildComponent
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
