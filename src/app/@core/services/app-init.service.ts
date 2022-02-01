import { Injectable } from "@angular/core";

@Injectable()
export class AppInitService {
  constructor() {}
  load() {
    return new Promise<void>(resolve => {
      console.log("AppInitService.init() called");

      setTimeout(() => {
        console.log("AppInitService Finished");
        resolve();
      }, 500);
    });
  }
}
