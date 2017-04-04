import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SettingsComponent} from "./settings.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SettingsComponent, pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
