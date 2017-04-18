import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TorrentInfo, TorrentsService} from "../torrents.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ModalDirective} from "ng2-bootstrap";
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-torrent-list',
  templateUrl: './torrent-list.component.html',
  styleUrls: ['./torrent-list.component.css']
})
export class TorrentListComponent implements OnInit {

  constructor(private torrensService: TorrentsService,
              private router: Router,
              private route: ActivatedRoute,
              private _alertService: AlertService) {
  }


  public columns: Array<any> = [
    {title: 'Name', name: 'name', sort: 'asc', size: 3},
    {title: 'Tracked', name: 'tracked', type: "check-mark", sort: 'desc'},
    {title: 'Watchers', name: 'watchers', type: "list", sort: 'asc'},
    {title: 'Added', name: 'addDate', type: "date", sort: 'asc'},
    {title: 'Finished', name: 'finishDate', type: "date", sort: 'asc'},
    {title: 'Last Checked', name: 'lastCheckDate', type: "date", sort: 'asc'},
    {title: 'Last Updated', name: 'lastUpdateDate', type: "date", sort: 'asc'},
  ];

  public config: any = {
    sorting: {name: 'tracked', sort: 'desc'},
    className: ['table-striped', 'table-bordered']
  };

  private torrents: Array<TorrentInfo> = [];
  private errorMessage;
  busy: Subscription;

  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  deleteModalTorrent: TorrentInfo;

  public ngOnInit(): void {
    this.initTorrents();
  }

  private initTorrents() {
    this.busy = this.torrensService.listTorrents().subscribe(
      torrents => {
        this.torrents = <TorrentInfo[]>torrents;
        this.onChangeTable(this.config);
      },
      error => this.errorMessage = <any>error
    );
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columnName: string = this.config.sorting.name;
    let sort: string = this.config.sorting.sort;

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public onChangeTable(config: any): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    this.torrents = this.changeSort(this.torrents, this.config);
  }

  public newTorrent() {
    this.router.navigateByUrl("torrents/");
  }

  public editTorrent(t: TorrentInfo): any {
    this.router.navigateByUrl("torrents/" + t.id);
  }

  public refreshTorrent(t: TorrentInfo): any {
    let id = t ? t.id : "";
    this.busy = this.torrensService.refreshTorrent(id).subscribe(
      next => {
        this.initTorrents();
        this._alertService.alerts.push({
          type: 'info',
          msg: next.replace(/\n/g, "<br/>"),
          timeout: 5000
        });
      }
    );
  }

  public showDeleteModal(t: TorrentInfo) {
    this.deleteModalTorrent = t;
    this.deleteModal.show();
  }

  public deleteTorrent(t: TorrentInfo): any {
    this.deleteModal.hide();
    this.deleteModalTorrent = null;
    this.busy = this.torrensService.deleteTorrent(t.id).subscribe(
      next => {
        this.initTorrents();
        this._alertService.alerts.push({
          type: 'danger',
          msg: "Torrent deleted successfully",
          timeout: 5000
        });
      }
    );
  }

  public getColumnSort(columnName: string) {

    if (this.config.sorting) {
      if (this.config.sorting.name === columnName) {
        return this.config.sorting.sort;
      }
    }
    return null;
  }

  public onHeaderClick(column: any) {

    if (this.config.sorting) {
      if (this.config.sorting.name === column.name) {
        this.config.sorting.sort = this.config.sorting.sort === 'asc' ? 'desc' : 'asc';
      } else {
        Object.assign(this.config.sorting, column)
      }
    }

    this.onChangeTable(this.config);
  }

}
