import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcCompComponent } from './calc-comp/calc-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcCompComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
