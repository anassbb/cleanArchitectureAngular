import { ReverseStrPipe } from "./reverse.pipe";

describe("[SHARED]: ReverseStrPipe", () => {
  let reverseStringPipe = new ReverseStrPipe();

  beforeEach(() => {
    reverseStringPipe = new ReverseStrPipe();
  });

  it("should be instanciated", () => {
    expect(reverseStringPipe).toBeDefined();
  });

  it("should return empty string if no string given", () => {
    const undefinedResult = reverseStringPipe.transform(undefined);

    expect(undefinedResult).toBe("");
  });

  it("should return reverse string", () => {
    const reversed = reverseStringPipe.transform("test");

    expect(reversed).toBe("tset");
  });
});
