import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _common: CommonService) {
    _common.title.subtitle = 'Settings'
  }

  ngOnInit() {
  }

}
