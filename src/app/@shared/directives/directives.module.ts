import { UppercaseDirective } from "./uppercase.directive";
import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlphabetOnlyDirective } from "./alphabet-only.directive";
import { DebounceClickDirective } from "./debounce-click.directive";
import { NumberDirective } from "./numeric.directive";
import { LetDirective } from "./ng-let.directive";
import { ReactiveFormsModule } from "@angular/forms";

export const SHARED_DIRECTIVES: Array<Type<any>> = [
  NumberDirective,
  DebounceClickDirective,
  UppercaseDirective,
  AlphabetOnlyDirective,
  LetDirective,
];

@NgModule({
  declarations: [...SHARED_DIRECTIVES],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...SHARED_DIRECTIVES],
})
export class SharedDirectivesModule {}
