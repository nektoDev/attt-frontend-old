import { Component, OnInit,  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TorrentInfo, TorrentsService} from "../torrents.service";

@Component({
  selector: 'app-torrent-detail',
  templateUrl: './torrent-detail.component.html',
  styleUrls: ['./torrent-detail.component.css'],
})
export class TorrentDetailComponent implements OnInit {

  public torrent: TorrentInfo;
  public id: string;
  public error: any;

  constructor(private route: ActivatedRoute,
              private torrentsService: TorrentsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.torrentsService.getTorrent(this.id).subscribe(
      torrent => this.torrent = torrent,
      error => this.error = error
    );
  }

  onSubmit() {
    this.torrentsService.saveTorrent(this.torrent).subscribe();
  }
}
