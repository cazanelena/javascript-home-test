const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  it("not the same type", () => {
    expect(() => assertEquals(1, "1")).toThrow();
  });

  it("returns without throwing an error", () => {
    expect(() => assertEquals("abc", "abc")).not.toThrow();
  });

  it("not the same string", () => {
    expect(() => assertEquals("abc", "acb")).toThrow();
  });

  it("not the same string length", () => {
    expect(() => assertEquals("abc", "abcc")).toThrow();
  });

  it("does not throw on error on comparing flat arrays", () => {
    expect(() => assertEquals(["a", "b", "c"], ["a", "b", "c"])).not.toThrow();
  });

  it("throws an error for array of different length", () => {
    expect(() => assertEquals(["a", "b"], ["a", "b", "c"])).toThrow();
  });

  it("throws an error for arrays with different elements", () => {
    expect(() => assertEquals(["a", "b"], ["a", "d"])).toThrow();
  });

  it("does not throw on error on comparing nested arrays", () => {
    expect(() =>
      assertEquals([["a"], ["b", "c"]], [["a"], ["b", "c"]])
    ).not.toThrow();
  });

  it("handles the counter example against flattened arrays", () => {
    expect(() =>
      assertEquals([["a", "b"], ["c"]], [["a"], ["b", "c"]])
    ).toThrow();
  });

  it("can compare arrays with different element types", () => {
    expect(() => assertEquals([1, "9"], [1, "9"])).not.toThrow();
  });

  it("throws when comparing different basic types", () => {
    expect(() => assertEquals(1, "1")).toThrow();
  });

  it("throws when comparing a basic type to a complex type", () => {
    expect(() => assertEquals([1], 1)).toThrow();
  });

  it("throws when comparing two objects", () => {
    expect(() =>
      assertEquals({ 1: "test" }, { 1: "test1", 2: "test2" })
    ).toThrow();
  });
  it("throws when two bool have different values", () => {
    expect(() => assertEquals(true, false)).toThrow();
  });
  it("does not throw an error when both bool have the same values", () => {
    expect(() => assertEquals(true, true)).not.toThrow();
  });
  it("throws when both elemants are numbers and they have different values", () => {
    expect(() => assertEquals(2, 3)).toThrow();
  });
  it("does not throw an error when both elements are numbers and have same value", () => {
    expect(() => assertEquals(2, 2)).not.toThrow();
  });
});
