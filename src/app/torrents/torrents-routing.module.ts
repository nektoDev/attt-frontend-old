import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TorrentsComponent} from "./torrents.component";
import {TorrentListComponent} from "./torrent-list/torrent-list.component";

const routes: Routes = [
  {
    path: '', component: TorrentsComponent,
    children: [
      {path: '', component: TorrentListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorrentsRoutingModule {
}
