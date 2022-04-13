import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nested-form-directive",
  templateUrl: "./nested-form-directive.component.html",
  styleUrls: ["./nested-form-directive.component.scss"],
})
export class NestedFormDirectiveComponent {
  public form = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    birthDate: new FormControl("", []),
  });

  get controls() {
    return this.form.controls;
  }

  public onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      console.log(formValue);
    }
  }
}
