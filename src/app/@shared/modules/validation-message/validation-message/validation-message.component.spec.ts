import { FormatErrorMessagePipe } from "./format-error-message.pipe";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ValidationMessageComponent } from "./validation-message.component";
import { FormControl } from "@angular/forms";

describe("[VALIDATION ] ValidationMessageComponent", () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ValidationMessageComponent, FormatErrorMessagePipe],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    component.control = new FormControl(null);
    fixture.detectChanges();
  });

  it("ValidationMessageComponent should create", () => {
    expect(component).toBeTruthy();
  });
});
