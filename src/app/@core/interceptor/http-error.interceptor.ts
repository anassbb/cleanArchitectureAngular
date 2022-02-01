import { LoaderService } from "./../services/loader.service";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, retry } from "rxjs";
import { request } from "http";

@Injectable({
  providedIn: "root",
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.display(true);
    return next.handle(req).pipe(
      retry(2),
      finalize(() => {
        this.loaderService.display(false);
      }),
    );
  }
}
