import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', redirectTo: "torrents", pathMatch: 'full'},
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: 'torrents', loadChildren: 'app/torrents/torrents.module#TorrentsModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
