import Calculator from "../src/js/calculator.js";

describe('Calculator', () => {

  let calculator = new Calculator();
  let userAge;

  beforeEach(() => {
  calculator = new Calculator(45);
  userAge;
});

  test('should create a Calculator class with a userAge property', () => {
    expect(calculator.userAge).toEqual(45);
  });

  test('should return the userAge in Mercury years', () => {
    expect(calculator.toMercuryYears(userAge)).toEqual(10.8);
  });

  test('should return the userAge in Venus years', () => {
    expect(calculator.toVenusYears(userAge)).toEqual(27.9);
  });

});