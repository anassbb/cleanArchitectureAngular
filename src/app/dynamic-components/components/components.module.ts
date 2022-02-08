import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { BlueDeviceComponent } from "./blue-device/blue-device.component";
import { GreenDeviceComponent } from "./green-device/green-device.component";
import { RedDeviceComponent } from "./red-device/red-device.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";

const dcComponenets: Type<any>[] = [BlueDeviceComponent, GreenDeviceComponent, RedDeviceComponent, TreeViewComponent];

@NgModule({
  declarations: [...dcComponenets],
  exports: [...dcComponenets],
  imports: [SharedModule],
})
export class DCComponentsModule {}
