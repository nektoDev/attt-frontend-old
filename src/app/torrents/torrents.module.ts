import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2TableModule} from "ng2-table";
import { TorrentsComponent } from './torrents.component';
import {TorrentsRoutingModule} from "./torrents-routing.module";
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentDetailComponent } from './torrent-detail/torrent-detail.component';
import {FormsModule} from "@angular/forms";
import {BusyModule} from "angular2-busy";

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    TorrentsRoutingModule,
    FormsModule,
    BusyModule
  ],
  declarations: [TorrentsComponent, TorrentListComponent, TorrentDetailComponent]
})
export class TorrentsModule { }
