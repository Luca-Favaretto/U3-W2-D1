import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { Prova1Component } from './prova1/prova1.component';
import { Prova2Component } from './prova2/prova2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    Prova1Component,
    Prova2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
