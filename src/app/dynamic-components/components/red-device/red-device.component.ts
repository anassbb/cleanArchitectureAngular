import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-red-device',
  templateUrl: './red-device.component.html',
  styleUrls: ['./red-device.component.scss'],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
      transition(":leave", [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class RedDeviceComponent  {}
