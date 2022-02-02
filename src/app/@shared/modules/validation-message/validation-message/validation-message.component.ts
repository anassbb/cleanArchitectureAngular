import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-validation-message",
  templateUrl: "./validation-message.component.html",
  styleUrls: ["./validation-message.component.scss"],
})
export class ValidationMessageComponent {
  @Input() public control!: FormControl;
  get errors(): { [Key: string]: any } {
    return this.control.errors || {};
  }
}
