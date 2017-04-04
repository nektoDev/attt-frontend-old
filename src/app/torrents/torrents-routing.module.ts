import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TorrentsComponent} from "./torrents.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'torrents', component: TorrentsComponent }
  ])],
  exports: [RouterModule]
})
export class TorrentsRoutingModule {}
