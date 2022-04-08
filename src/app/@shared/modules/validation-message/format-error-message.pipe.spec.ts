import { FormatErrorMessagePipe } from "./format-error-message.pipe";

describe("FormatErrorMessagePipe", () => {
  const pipe = new FormatErrorMessagePipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("Format error required", () => {
    expect(pipe.transform({ key: "required", value: true })).toEqual("This field cannot be left blank");
  });

  it("Format error maxLength", () => {
    expect(pipe.transform({ key: "maxLength", value: { actualLength: 20, requiredLength: 10 } })).toEqual(
      "Maximum length 10",
    );
  });
});
