import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'torrents', pathMatch: 'full'},
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
