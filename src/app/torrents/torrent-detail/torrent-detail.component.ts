import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TorrentInfo, TorrentsService} from "../torrents.service";

@Component({
  selector: 'app-torrent-detail',
  templateUrl: './torrent-detail.component.html',
  styleUrls: ['./torrent-detail.component.css']
})
export class TorrentDetailComponent implements OnInit {

  public torrent: TorrentInfo;
  public id: string;

  constructor(private route: ActivatedRoute,
              private torrentsService: TorrentsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

  }

}
