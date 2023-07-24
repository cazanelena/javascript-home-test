function assertEquals(expect, actual) {
  if (typeof expect !== typeof actual) {
    throw new Error(
      `Expected type ${typeof expect} but got type ${typeof actual}`
    );
  }

  if (typeof expect === "object") {
    if (Array.isArray(actual)) {
      assertArrayEquals(expect, actual);
    } else {
      // TODO: do object comparison
      // if the objects are the same not to throw
      throw new Error("object comparison is not supported");
    }
  }

  // do assertion for simple types, boolean, number ...

  if (typeof expect === "string") {
    if (expect !== actual) {
      throw new Error(`Expected ${expect} to be same as ${actual}`);
    }
  }
  if (typeof expect === "boolean") {
    if (expect !== actual) {
      throw new Error(`Exected ${expect} to be same as ${actual}`);
    }
  }
  // TO DO assert equals for undefined, numbers
  if (typeof expect === "number") {
    if (expect !== actual) {
      throw new Error(`Expected ${expect} to be same as ${actual}`);
    }
  }
}

function assertArrayEquals(expect, actual) {
  if (expect.length !== actual.length) {
    throw new Error(
      `Expected both arguments to have the same length but received ${expect.length} and ${actual.length}`
    );
  }

  for (let i = 0; i < expect.length; i++) {
    assertEquals(expect[i], actual[i]);
  }
}

module.exports = assertEquals;
