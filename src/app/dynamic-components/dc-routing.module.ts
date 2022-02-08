import { DevicesComponent } from "./containers/devices/devices.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: DevicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DcRoutingModule {}
