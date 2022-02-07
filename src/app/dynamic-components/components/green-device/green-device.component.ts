import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-green-device",
  templateUrl: "./green-device.component.html",
  styleUrls: ["./green-device.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
      transition(":leave", [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class GreenDeviceComponent {}
