import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2TableModule} from "ng2-table";
import { TorrentsComponent } from './torrents.component';
import {TorrentsRoutingModule} from "./torrents-routing.module";
import { TorrentsService } from './torrents.service';
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentDetailComponent } from './torrent-detail/torrent-detail.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    TorrentsRoutingModule
  ],
  declarations: [TorrentsComponent, TorrentListComponent, TorrentDetailComponent]
})
export class TorrentsModule { }
