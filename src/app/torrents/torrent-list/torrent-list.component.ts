import { Component, OnInit } from '@angular/core';
import {TorrentInfo, TorrentsService} from "../torrents.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-torrent-list',
  templateUrl: './torrent-list.component.html',
  styleUrls: ['./torrent-list.component.css']
})
export class TorrentListComponent implements OnInit {

  constructor(private torrensService: TorrentsService,
              private router: Router,
              private route: ActivatedRoute) { }


  public columns: Array<any> = [
    {title: 'name', name: 'name', sort: ''},
    {title: 'Tracked', name: 'tracked', type: "check-mark", sort: 'desc'},
    {title: 'URL', name: 'url', type: "url", sort: ''},
    {title: 'Added', name: 'addDate', type: "date", sort: ''},
    {title: 'Finished', name: 'finishDate', type: "date", sort: ''},
    {title: 'Last Checked', name: 'lastCheckDate', type: "date", sort: ''},
    {title: 'Last Updated', name: 'lastUpdateDate', type: "date", sort: ''}
  ];

  public config: any = {
    sorting: {columns: this.columns},
    className: ['table-striped', 'table-bordered']
  };

  private torrents: Array<TorrentInfo> = [];
  private errorMessage;


  public ngOnInit(): void {
    this.torrensService.listTorrents().subscribe(
      torrents => {this.torrents = <TorrentInfo[]>torrents; this.onChangeTable(this.config);},
      error => this.errorMessage = <any>error
    );
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }


    if (!columnName) {
      return data;
    }
    console.log(columnName)

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
    console.log(this.torrents);

    this.torrents = this.changeSort(this.torrents, this.config);
    console.log(this.torrents);
  }

  public onRowClick(t: TorrentInfo): any {
    console.log(t.id);
    this.router.navigateByUrl("torrents/"+t.id);
  }

}
