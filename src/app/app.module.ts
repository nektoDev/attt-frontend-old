import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TorrentsModule } from './torrents/torrents.module'

import { AppRoutingModule }   from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonService} from "./common.service";
import {AlertService} from "./alert.service";
import {AlertModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TorrentsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
  ],
  providers: [CommonService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
