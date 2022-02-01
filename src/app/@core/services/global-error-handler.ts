import { environment } from "./../../../environments/environment.prod";
import { Logger } from "./logger.service";
import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

const log = new Logger("GlobalErrorHandler");

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.handleServerError(error);
    } else {
      this.handleClientError(error);
    }
  }

  private handleServerError(error: HttpErrorResponse) {
    if (!navigator.onLine) {
      alert("No Internet Connection");
    }

    if (!environment.production) {
      log.error("Request error", error);
      alert(`${error.status} - ${error.message}`);
    }
  }

  private handleClientError(error: Error) {
    log.error(error);
  }
}
