import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appNumeric]",
})
export class NumberDirective {
  constructor(private _el: ElementRef) {}

  @HostListener("input", ["$event"]) public onInputChange(event: any) {
    const initValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initValue.replace(/[^0-9]*/g, "");
    if (initValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
