import { CustomFieldFormComponent } from "./custom-field-form/custom-field-form.component";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { SharedModule } from "@shared/shared.module";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { NestedFormDirectiveComponent } from "./nested-form-directive/nested-form-directive.component";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NestedFormComponent } from "./nested-form-service/nested-form-service.component";
import { CounterInputComponent } from "./custom-field-form/counter-input/counter-input.component";
import { FormFullNameComponent } from "./nested-form-directive/form-fullname/field-fullname.component";

const formsComponents: Array<Type<any>> = [
  BasicFormComponent,
  NestedFormComponent,
  NestedFormDirectiveComponent,
  DynamicFormComponent,
  CustomFieldFormComponent,
  CounterInputComponent,
  FormFullNameComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...formsComponents],
  exports: [...formsComponents],
})
export class ComponentsModule {}
