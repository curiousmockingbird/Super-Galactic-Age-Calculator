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

  test('should create a lifeExpForUserOnEarth property for the Calculator class', () => {
    expect(calculator.lifeExpForUserOnEarth).toEqual(88);
  });

  test('should return an array with life expectancy for each planet based on the life exp for the user', () => {
    expect(calculator.lifeExp(lifeExpForUserOnEarth)).toEqual([21.1, 54.6, 165.4, 1043.7]);
  });

  test('should return an array with the years to live for each planet based on the life exp for the user', () => {
    expect(calculator.yearsToLive()).toEqual([10.3, 26.7, 80.8, 510]);
  });

  test('should return the number of years the user has lived past the life expectancy if surpassed', () => {
    let calculator = new Calculator(100, 88);
    expect(calculator.surpassed()).toEqual(12);
  });

  test('should return in how many years the user will reach the average life expectancy if not reached yet', () => {
    let calculator = new Calculator(45, 88);
    expect(calculator.surpassed()).toEqual(`You'll reach the average life expectancy in 43 years!`);
  }); 

});