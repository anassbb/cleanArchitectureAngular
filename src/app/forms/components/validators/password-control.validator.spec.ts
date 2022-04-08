import { FormControl } from "@angular/forms";
import { PasswordValidators } from "./password-control.validator";

describe("[rbs-user-identity-security-center-widget-extended]: PsswordValidators", () => {
  const isValueSatisfyFormatValidator = PasswordValidators.isValueSatisfyFormatValidator();
  const control = new FormControl("input");

  it('should return "wrongPasswordFormat: true" if input string length is less than 8 characters', () => {
    control.setValue("12345");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it('shoud return "wrongPasswordFormat: true" if input string do not have UPERCASE letter', () => {
    control.setValue("12345qwe");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ worngPasswordFormat: true });
  });

  it('should return "wrongPasswordFormat: true" if input string do not have lowercase letter', () => {
    control.setValue("1234WWW");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it('should return "wrongPasswordFormat: true" if input string do not have lowercase letter', () => {
    control.setValue("qweqweWW");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it("should return null if input string is satisfying all rules", () => {
    control.setValue("123qweQW");
    expect(isValueSatisfyFormatValidator(control)).toBeNull();
  });
});
