import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form/basic-form.component';
import { CustomFieldFormComponent } from './custom-field-form/custom-field-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NestedFormDirectiveComponent } from './nested-form-directive/nested-form-directive.component';
import { NestedFormServiceComponent } from './nested-form-service/nested-form-service.component';



@NgModule({
  declarations: [
    BasicFormComponent,
    CustomFieldFormComponent,
    DynamicFormComponent,
    NestedFormDirectiveComponent,
    NestedFormServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
