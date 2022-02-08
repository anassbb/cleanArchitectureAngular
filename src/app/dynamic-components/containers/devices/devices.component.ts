import { OnDestroy } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
