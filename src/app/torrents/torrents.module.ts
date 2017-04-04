import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2TableModule} from "ng2-table";
import { TorrentsComponent } from './torrents.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
  ],
  declarations: [TorrentsComponent],
  exports: [TorrentsComponent]
})
export class TorrentsModule { }
