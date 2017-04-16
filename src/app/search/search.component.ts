import {Component, OnInit, Output} from '@angular/core';
import {FoundedTorrent, SearchService} from "./search.service";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;
  public founded: FoundedTorrent[];
  public busy: Subscription;

  public columns: Array<any> = [
    {title: 'Name', name: 'name', sort: 'asc'},
    {title: 'URL', name: 'url', type: "url", sort: 'asc'},
    {title: 'Category', name: 'category', sort: 'asc'},
    {title: 'Seeders', name: 'seeders', sort: 'asc'},
    {title: 'Size', name: 'size', sort: 'asc', type: 'byte'},
  ];

  public config: any = {
    sorting: {},
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.query = "Harry Potter"
  }

  onSubmit() {
    this.busy = this.searchService.search(this.query).subscribe( r => this.founded = r);
  }

  addTorrent(t: FoundedTorrent, type: string) {
    this.busy = this.searchService.add(t,type).subscribe();
  }

  public onChangeTable(config: any): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    this.founded = this.changeSort(this.founded, this.config);
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
