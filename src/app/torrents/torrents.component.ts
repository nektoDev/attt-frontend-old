import {Component, OnInit} from '@angular/core';
import {TorrentInfo, TorrentsService} from "./torrents.service";

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css'],
  providers: [TorrentsService],

})
export class TorrentsComponent {

  public title: string = "Torrents";
  public alerts: any = [];
  public constructor() {
  }
}
