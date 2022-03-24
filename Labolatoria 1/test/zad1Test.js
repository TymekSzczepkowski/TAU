const assert = require("chai").assert;
const zad1 = require("../zad1");

describe("Zad1", function () {
  it("Verify if artimetric mean of [1, 1, 1, 1, 1] is equal to 1 ", function () {
    assert.equal(zad1([1, 1, 1, 1, 1]), 1);
  });
  it("Verify if artimetric mean of [2, 2, 2, 2, 2] is equal to 2 ", function () {
    assert.equal(zad1([2, 2, 2, 2, 2]), 2);
  });
  it("Verify if artimetric mean of [3, 3, 3, 3, 3] is equal to 3 ", function () {
    assert.equal(zad1([3, 3, 3, 3, 3]), 3);
  });
  it("Verify if artimetric mean of [1, 1, 1, 1, 1] is not equal to 1 ", function () {
    assert.notEqual(zad1([1, 1, 1, 1, 1]), 2);
  });
  it("Verify if artimetric mean of [2, 2, 2, 2, 2] is not equal to 1 ", function () {
    assert.notEqual(zad1([2, 2, 2, 2, 2]), 1);
  });
  it("Verify if artimetric mean of [3, 3, 3, 3, 3] is not equal to 4 ", function () {
    assert.notEqual(zad1([3, 3, 3, 3, 3]), 1);
  });
  it("Verify if artimetric mean of [1, 1, 1, 1, 1] is above 0", function () {
    assert.isAbove(zad1([1, 1, 1, 1, 1]), 0);
  });
  it("Verify if artimetric mean of [1, 1, 1, 1, 1] is number ", function () {
    assert.isNumber(zad1([1, 1, 1, 1, 1]), "is number");
  });
  it("Verify if artimetric mean of [1, 1, 1, 1, 1] is not a string ", function () {
    assert.isNotString(zad1([1, 1, 1, 1, 1]), "is not string");
  });
  it("Verify if artimetric mean of [1, 1, 1, 1, 1]is not a non ", function () {
    assert.isNotNaN(zad1([1, 1, 1, 1, 1]), "is not Nan");
  });
});
