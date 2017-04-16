import {Component, Input} from '@angular/core';
import {CommonService} from "./common.service";
import {AlertService} from "./alert.service";

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

  alerts = [];

  constructor(private _common: CommonService, private _alertService: AlertService) {
    this.title = _common.title;
    this.alerts = _alertService.alerts;
  }
}
