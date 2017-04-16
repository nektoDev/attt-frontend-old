import {Component, OnInit} from '@angular/core';
import {TorrentInfo, TorrentsService} from "./torrents.service";
import {CommonService} from "../common.service";

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css'],
  providers: [TorrentsService],

})
export class TorrentsComponent {

  public constructor(private _common: CommonService) {
    _common.title.subtitle = "Torrents";
  }
}
