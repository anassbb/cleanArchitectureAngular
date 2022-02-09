import { CommonModule } from "@angular/common";
import { UsersViewComponent } from "./users-view/users-view/users-view.component";
import { SharedModule } from "@shared/shared.module";
import { NgModule, Type } from "@angular/core";

const usersComponets: Array<Type<any>> = [UsersViewComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...usersComponets],
  exports: [...usersComponets],
})
export class UsersComponentsModule {}
