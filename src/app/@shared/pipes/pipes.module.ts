import { RemoveWhiteSpacePipe } from "./remove-white-space.pipe";
import { ReverseStrPipe } from "./reverse.pipe";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

export const SHARED_PIPES: Array<Type<any>> = [ReverseStrPipe, RemoveWhiteSpacePipe];

@NgModule({
  declarations: [...SHARED_PIPES],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...SHARED_PIPES],
})
export class SharedPipesModule {}
