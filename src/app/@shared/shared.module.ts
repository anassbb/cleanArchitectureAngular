import { NgxJsonViewerModule } from "ngx-json-viewer";
import { ValidationMessageModule } from "./modules/validation-message/validation-message/validation-message.module";
import { SharedPipesModule } from "./pipes/pipes.module";
import { SharedDirectivesModule } from "./directives/directives.module";
import { MaterialModule } from "./modules/material.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedComponentsModule } from "./components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
})
export class SharedModule {}
