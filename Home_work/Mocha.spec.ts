// import assert from "assert";
//
// class Calculator {
//   private sum(a: number, b: number) {
//     return a + b;
//   }
//   private ded(a: number, b: number) {
//     return a - b;
//   }
//   private div(a: number, b: number) {
//     return a / b;
//   }
//   private mult(a: number, b: number) {
//     return a * b;
//   }
//   getResult(a: number, b: number, c: string) {
//     if (c === "+") {
//       return this.sum(a, b);
//     } else if (c === "-") {
//       return this.ded(a, b);
//     } else if (c === "/") {
//       return this.div(a, b);
//     } else if (c === "*") {
//       return this.mult(a, b);
//     }
//   }
// }
//
// const mySimplTests = new Calculator();
//
// describe("Check summation (positive)", function () {
//   it("Test_1", function () {
//     assert.equal(mySimplTests.getResult(2, 2, "+"), 4, "Test Failed");
//   });
//   it("Test_2", function () {
//     assert.equal(mySimplTests.getResult(123, 456, "+"), 579, "Test Failed");
//   });
// });
//
// describe("Check summation (negative)", function () {
//   it("Test_3", function () {
//     assert.equal(mySimplTests.getResult(2, 2, "+"), 5, "Test Failed");
//   });
// });
//
// describe("Check multiplication (positive)", function () {
//   it("Test_4", function () {
//     assert.equal(mySimplTests.getResult(10, 20, "*"), 200, "Test Failed");
//   });
// });
//
// describe("Check multiplication (negative)", function () {
//   it("Test_5", function () {
//     assert.equal(mySimplTests.getResult(44, 11, "*"), 222222, "Test Failed");
//   });
// });
//
// describe("Check deduction (positive)", function () {
//   it("Test_6", function () {
//     assert.equal(mySimplTests.getResult(33, 22, "-"), 11, "Test Failed");
//   });
//   it("Test_7", function () {
//     assert.equal(mySimplTests.getResult(123456, 12345, "-"), 111111, "Test Failed");
//   });
// });
//
// describe("Check deduction (negative)", function () {
//   it("Test_8", function () {
//     assert.equal(mySimplTests.getResult(456, 789, "-"), 123, "Test Failed");
//   });
// });
//
// describe("Check division (positive)", function () {
//   it("Test_9", function () {
//     assert.equal(mySimplTests.getResult(121, 11, "/"), 11, "Test Failed");
//   });
// });
//
// describe("Check division (negative)", function () {
//   it("Test_10", function () {
//     assert.equal(mySimplTests.getResult(100, 100, "/"), 10, "Test Failed");
//   });
// });
