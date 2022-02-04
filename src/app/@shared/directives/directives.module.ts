import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetOnlyDirective } from './alphabet-only.directive';
import { DebounceClickDirective } from './debounce-click.directive';



@NgModule({
  declarations: [
    AlphabetOnlyDirective,
    DebounceClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
