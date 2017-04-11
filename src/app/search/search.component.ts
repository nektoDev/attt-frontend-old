import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;

  constructor() { }

  ngOnInit() {
    this.query = "Harry Potter"
  }

  onSubmit() {
    this.query = ""

  }

}
