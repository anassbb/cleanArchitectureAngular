import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from "./guards/module-import-guard";

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
  static forRoot(options: { defaultLanguage?: string; appName?: string }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ,
        },
      ],
    };
  }
}
