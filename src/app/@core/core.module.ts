import { AppInitService } from "./services/app-init.service";
import { RouteReuseStrategy } from "@angular/router";
import { HttpErrorInterceptor } from "./interceptor/http-error.interceptor";
import { TokenInterceptor } from "./interceptor/jwt-interceptor";
import { ApiPrefixInterceptor } from "./interceptor/api-prefix.interceptor";
import { APP_NAME } from "./tokens/app-name";
import { environment } from "@env/environment";
import { APP_LANG } from "./tokens/app-lang";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from "./guards/module-import-guard";
import { RouteReusableStrategy } from "./route-reusable-strategy";

export function initializerFactory(appConfig: AppInitService) {
  return (): Promise<any> => appConfig.load();
}
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
          provide: APP_LANG,
          useValue: options.defaultLanguage || environment.defaultLanguage || "en-US",
        },
        {
          provide: APP_NAME,
          useValue: options.appName || environment.appName || "NGX-Levi9",
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiPrefixInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
        {
          provide: RouteReuseStrategy,
          useClass: RouteReusableStrategy,
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializerFactory,
          deps: [AppInitService],
          multi: true,
        },
        AppInitService,
      ],
    };
  }
}
