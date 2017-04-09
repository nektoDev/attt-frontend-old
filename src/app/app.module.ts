import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TorrentsModule } from './torrents/torrents.module'

import { AppRoutingModule }   from './app-routing.module';
import {Router} from "@angular/router";
import {BusyModule} from 'angular2-busy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TorrentsModule,
    AppRoutingModule,
    FormsModule,
    BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
