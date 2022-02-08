import { DcRoutingModule } from "./dc-routing.module";
import { SharedModule } from "@shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersContainersModule } from "./containers/containers.module";

@NgModule({
  declarations: [],
  imports: [SharedModule, UsersContainersModule, DcRoutingModule],
})
export class DcModule {}
