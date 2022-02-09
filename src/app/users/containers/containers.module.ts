import { NgModule, Type } from "@angular/core";

import { UsersComponent } from "./users/users.component";
import { UsersComponentsModule } from "./../components/components.module";
import { SharedModule } from "@shared/shared.module";

const usersContainers: Array<Type<any>> = [UsersComponent];

@NgModule({
  declarations: [...usersContainers],
  imports: [SharedModule, UsersComponentsModule],
  exports: [...usersContainers],
})
export class ContainersModule {}
