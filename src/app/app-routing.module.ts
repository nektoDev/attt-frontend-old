import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'torrents', pathMatch: 'full'},
  { path: 'torrents', loadChildren: 'app/torrents/torrents.module#TorrentsModule' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
