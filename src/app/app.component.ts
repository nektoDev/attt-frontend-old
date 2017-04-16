import {Component, Input} from '@angular/core';
import {CommonService} from "./common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = {
    value: "ATTT",
    subtitle: "app"
  };

  constructor(private _common: CommonService) {
    this.title = _common.title;
  }
}
