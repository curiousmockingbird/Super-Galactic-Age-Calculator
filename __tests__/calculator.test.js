import Calculator from "../src/js/calculator.js";

describe('Calculator', () => {
  let calculator = new Calculator(45);
  let userAge;
  test('should create a Calculator class with a userAge property', () => {
    expect(calculator.userAge).toEqual(45);
  })
});