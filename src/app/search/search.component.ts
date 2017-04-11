import { Component, OnInit } from '@angular/core';
import {FoundedTorrent, SearchService} from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;
  public founded: FoundedTorrent[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.query = "Harry Potter"
  }

  onSubmit() {
    this.searchService.search(this.query).subscribe( r => this.founded = r);
  }
}
