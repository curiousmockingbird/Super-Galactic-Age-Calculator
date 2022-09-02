export default class Calculator {
  constructor(userAge){
    this.userAge = userAge;
  }
  toMercuryYears(userAge) {
    let userAgeToMercuryYears = Math.round((this.userAge * 0.24) * 10) / 10;
    return userAgeToMercuryYears;
  }
}