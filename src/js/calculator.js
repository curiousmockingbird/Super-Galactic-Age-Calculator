export default class Calculator {
  constructor(userAge, lifeExpForUserOnEarth) {
    this.userAge = userAge;
    this.lifeExpForUserOnEarth = lifeExpForUserOnEarth;
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
  lifeExp(lifeExpForUserOnEarth){

    let lifeExpectancyForEachPlanet = [];
    
    let lifeExpMercury = Math.round((this.lifeExpForUserOnEarth * 0.24) * 10) / 10;
    let lifeExpVenus = Math.round((this.lifeExpForUserOnEarth * 0.62) * 10) / 10;
    let lifeExpMars = Math.round((this.lifeExpForUserOnEarth * 1.88) * 10) / 10;
    let lifeExpJupiter = Math.round((this.lifeExpForUserOnEarth * 11.86) * 10) / 10;

    lifeExpectancyForEachPlanet.push(lifeExpMercury, lifeExpVenus, lifeExpMars, lifeExpJupiter);

    return lifeExpectancyForEachPlanet;
  }
  yearsToLive () {

  }

}