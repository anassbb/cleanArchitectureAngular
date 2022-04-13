import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-fullname",
  templateUrl: "./field-fullname.component.html",
  styleUrls: ["./field-fullname.component.scss"],
})
export class FormFullNameComponent implements OnInit {
  public form!: FormGroup;

  get controls() {
    return this.form && this.form.controls;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
