import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App, routes, KeysPipe } from './app/index';
import { Charts, ChartDetails, ChartAddEdit } from './app/containers/index';
import { ApiService, ChartsService } from './app/services/index';

@NgModule({
  declarations: [
    App,
    Charts,
    ChartDetails,
    ChartAddEdit,
    KeysPipe
  ],
  imports: [FormsModule, BrowserModule, HttpModule, routes],
  providers: [ApiService, ChartsService],
  bootstrap: [App]
})
export class AppModule {};

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);