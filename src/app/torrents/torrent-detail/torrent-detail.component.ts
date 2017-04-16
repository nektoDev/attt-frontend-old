import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TorrentInfo, TorrentsService} from "../torrents.service";
import {AlertService} from "../../alert.service";

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
              private torrentsService: TorrentsService,
              private _alertService: AlertService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.torrentsService.getTorrent(this.id).subscribe(
        torrent => this.torrent = torrent,
        error => this.error = error
      );
    } else {
      this.torrent = new TorrentInfo(null);
    }

  }

  setMovieDir() {
    this.torrent.downloadDir = '/home/nektodev/Media/Movies/'
  }

  setSeriesDir() {
    this.torrent.downloadDir = '/home/nektodev/Media/Series/'
  }

  onSubmit() {
    this.torrentsService.saveTorrent(this.torrent).subscribe(
      s => {
        this._alertService.alerts.push({
          type: 'info',
          msg: "Torrent successfully saved!",
          timeout: 5000
        })
      },
      error => {
        this._alertService.alerts.push({
          type: 'danger',
          msg: error.text().replace(/\n/g, "<br/>"),
          timeout: 5000
        })
      }
    );
  }
}
