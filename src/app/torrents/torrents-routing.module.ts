import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TorrentsComponent} from "./torrents.component";
import {TorrentListComponent} from "./torrent-list/torrent-list.component";
import {TorrentDetailComponent} from "./torrent-detail/torrent-detail.component";

const routes: Routes = [
  {
    path: '', component: TorrentsComponent,
    children: [
      {path: '',    component: TorrentListComponent},
      {path: 'torrents/:id', component: TorrentDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorrentsRoutingModule {
}
