import { ReactiveFormsModule } from "@angular/forms";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";

export const SHARED_COMPONENTS: Array<Type<any>> = [LoaderComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
