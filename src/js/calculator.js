export default class Calculator {
  constructor(userAge){
    this.userAge = userAge;
  }
  toMercuryYears(userAge) {
    let userAgeToMercuryYears = Math.round((this.userAge * 0.24) * 10) / 10;
    return userAgeToMercuryYears;
  }
  toVenusYears(userAge) {
    let userAgeToVenusYears = Math.round((this.userAge * 0.62) * 10) / 10;
    return userAgeToVenusYears;
  }
  toMarsYears(userAge) {
    let userAgeToMarsYears = Math.round((this.userAge * 1.88) * 10) / 10;
    return userAgeToMarsYears;
  }
  toJupiterYears(userAge) {
    let userAgeToJupiterYears = Math.round((this.userAge * 11.86) * 10) / 10;
    return userAgeToJupiterYears;
  }
}