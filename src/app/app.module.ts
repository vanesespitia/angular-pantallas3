import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './L/Login.component';

@NgModule({
  declarations:[AppComponent , LoginComponent],
  imports:      [ BrowserModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
