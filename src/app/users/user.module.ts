import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersContainersModule } from "./../dynamic-components/containers/containers.module";

import { UsersService } from "./services/users.service";
import { UsersFacadeService } from "./services/users-facade.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, UsersContainersModule, UsersRoutingModule],
  providers: [UsersFacadeService, UsersService],
})
export class UserModule {}
