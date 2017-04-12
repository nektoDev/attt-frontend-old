import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {FormsModule} from "@angular/forms";
import {BusyModule} from "angular2-busy";
import {AlertModule, BsDropdownModule, ModalModule} from "ng2-bootstrap";
import { SearchService } from './search.service';
import { BytePipe } from './byte.pipe';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    BusyModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [SearchComponent, BytePipe],
  providers: [SearchService]
})
export class SearchModule { }
