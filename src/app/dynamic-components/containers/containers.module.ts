import { DCComponentsModule } from "./../components/components.module";
import { SharedModule } from "@shared/shared.module";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DevicesComponent } from "./devices/devices.component";

const dcComponent: Array<Type<any>> = [DevicesComponent];

@NgModule({
  declarations: [...dcComponent],
  imports: [SharedModule, DCComponentsModule],
  exports: [...dcComponent],
})
export class UsersContainersModule {}
