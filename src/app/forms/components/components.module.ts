import { BasicFormComponent } from "./basic-form/basic-form.component";
import { SharedModule } from "@shared/shared.module";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { NestedFormDirectiveComponent } from "./nested-form-directive/nested-form-directive.component";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NestedFormComponent } from "./nested-form-service/nested-form-service.component";
import { CounterInputComponent } from './custom-field-form/counter-input/counter-input.component';

const formsComponents: Array<Type<any>> = [
  BasicFormComponent,
  NestedFormComponent,
  NestedFormDirectiveComponent,
  DynamicFormComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...formsComponents, CounterInputComponent],
  exports: [...formsComponents],
})
export class ComponentsModule {}
