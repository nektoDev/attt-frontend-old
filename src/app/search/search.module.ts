import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {FormsModule} from "@angular/forms";
import {BusyModule} from "angular2-busy";
import {AlertModule, ModalModule} from "ng2-bootstrap";
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    BusyModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
