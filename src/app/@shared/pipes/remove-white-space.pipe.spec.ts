import { RemoveWhiteSpacePipe } from "./remove-white-space.pipe";

describe("[SHARED]: RemoveWhiteSpacePipe", () => {
  let removeWhiteSpacePipe: RemoveWhiteSpacePipe;

  beforeEach(() => {
    removeWhiteSpacePipe = new RemoveWhiteSpacePipe();
  });

  it("shouled be instanciated", () => {
    expect(removeWhiteSpacePipe).toBeDefined();
  });

  it("return 'undefined' if no string given", () => {
    const UndefinedResult = removeWhiteSpacePipe.transform(undefined);

    expect(UndefinedResult).toBe("undefined");
  });

  it("shouled return string without space", () => {
    const result = removeWhiteSpacePipe.transform("test test");

    expect(result).toBe("testtest");
  });
});
