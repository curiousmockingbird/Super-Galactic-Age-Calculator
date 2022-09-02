import Calculator from "../src/js/calculator.js";

describe('Calculator', () => {

  let calculator = new Calculator();
  let userAge;
  let lifeExpForUserOnEarth;

  beforeEach(() => {
  calculator = new Calculator(45, 88);
  userAge;
  lifeExpForUserOnEarth;
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

  test('should return the userAge in Mars years', () => {
    expect(calculator.toMarsYears(userAge)).toEqual(84.6);
  });

  test('should return the userAge in Jupiter years', () => {
    expect(calculator.toJupiterYears(userAge)).toEqual(533.7);
  });

  test('should create a life expectancy function', () => {
    expect(calculator.lifeExp(lifeExpForUserOnEarth)).toEqual(88);
  });

});