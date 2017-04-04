import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2TableModule} from "ng2-table";
import { TorrentsComponent } from './torrents.component';
import {TorrentsRoutingModule} from "./torrents-routing.module";

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    TorrentsRoutingModule
  ],
  declarations: [TorrentsComponent],
})
export class TorrentsModule { }
