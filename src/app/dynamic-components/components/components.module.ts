import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueDeviceComponent } from './blue-device/blue-device.component';
import { GreenDeviceComponent } from './green-device/green-device.component';
import { RedDeviceComponent } from './red-device/red-device.component';
import { TreeViewComponent } from './tree-view/tree-view.component';



@NgModule({
  declarations: [
    BlueDeviceComponent,
    GreenDeviceComponent,
    RedDeviceComponent,
    TreeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
