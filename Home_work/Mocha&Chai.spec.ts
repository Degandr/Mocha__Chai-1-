import { expect } from "chai";

class Calculator {
  private sum(a: number, b: number) {
    return a + b;
  }
  private ded(a: number, b: number) {
    return a - b;
  }
  private div(a: number, b: number) {
    return a / b;
  }
  private mult(a: number, b: number) {
    return a * b;
  }
  getResult(a: number, b: number, c: string) {
    if (c === "+") {
      return this.sum(a, b);
    } else if (c === "-") {
      return this.ded(a, b);
    } else if (c === "/") {
      return this.div(a, b);
    } else if (c === "*") {
      return this.mult(a, b);
    }
  }
}

const mySimplTests = new Calculator();

describe("Chai_summation (positive)", function () {
  it("Test_1", function () {
    expect(mySimplTests.getResult(2, 2, "+"), "Test Failed").to.equal(4);
  });
});

describe("Chai_summation (negative)", function () {
  it("Test_2", function () {
    expect(mySimplTests.getResult(10, 10, "+"), "Test Failed").to.equal(100);
  });
  it("Test_3", function () {
    expect(mySimplTests.getResult(9, 11, "+"), "Test Failed").to.equal(30);
  });
});

describe("Chai_multiplication (positive)", function () {
  it("Test_4", function () {
    expect(mySimplTests.getResult(10, 20, "*"), "Test Failed").to.equal(200);
  });
});

describe("Chai_multiplication (negative)", function () {
  it("Test_5", function () {
    expect(mySimplTests.getResult(44, 11, "*"), "Test Failed").to.equal(222222);
  });
});

describe("Chai_deduction (positive)", function () {
  it("Test_6", function () {
    expect(mySimplTests.getResult(33, 22, "-"), "Test Failed").to.equal(11);
  });
  it("Test_7", function () {
    expect(mySimplTests.getResult(123456, 12345, "-"), "Test Failed").to.equal(111111);
  });
});

describe("Chai_deduction (negative)", function () {
  it("Test_8", function () {
    expect(mySimplTests.getResult(456, 789, "-"), "Test Failed").to.equal(123);
  });
});

describe("Chai_division (positive)", function () {
  it("Test_9", function () {
    expect(mySimplTests.getResult(121, 11, "/"), "Test Failed").to.equal(11);
  });
});

describe("Chai_division (negative)", function () {
  it("Test_10", function () {
    expect(mySimplTests.getResult(100, 100, "/"), "Test Failed").to.equal(10);
  });
});
