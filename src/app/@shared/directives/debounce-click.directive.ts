import { HostListener, Input, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { Directive } from "@angular/core";
import { debounceTime, ReplaySubject } from "rxjs";

@Directive({
  selector: "[appDebounceClick]",
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input()
  debounceTime = 500;
  @Output()
  debounceClick = new EventEmitter();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {}

  @HostListener("click", ["$event"])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.destroyed$.next(true);
  }

  ngOnInit() {
    this.destroyed$.pipe(debounceTime(this.debounceTime)).subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.destroyed$.complete();
  }
}
