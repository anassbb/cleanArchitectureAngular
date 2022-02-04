import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) {}

  get ngLet(): T {
    return this.dir.ngLet;
  }
}

@Directive({
  selector: "[appNgLet]",
})
export class LetDirective<T> {
  @Input()
  ngLet: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>,
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}
