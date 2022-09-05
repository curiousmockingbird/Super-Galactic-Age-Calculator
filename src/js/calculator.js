export default class Calculator {

  constructor(userAge, lifeExpForUserOnEarth) {
    this.userAge = userAge;
    this.lifeExpForUserOnEarth = lifeExpForUserOnEarth;
  }
  toMercuryYears() {
    let userAgeToMercuryYears = Math.round((this.userAge * 0.24) * 10) / 10;
    return userAgeToMercuryYears;
  }
  toVenusYears() {
    let userAgeToVenusYears = Math.round((this.userAge * 0.62) * 10) / 10;
    return userAgeToVenusYears;
  }
  toMarsYears() {
    let userAgeToMarsYears = Math.round((this.userAge * 1.88) * 10) / 10;
    return userAgeToMarsYears;
  }
  toJupiterYears() {
    let userAgeToJupiterYears = Math.round((this.userAge * 11.86) * 10) / 10;
    return userAgeToJupiterYears;
  }
  lifeExp(){

    let lifeExpectancyForEachPlanet = [];
    
    let lifeExpMercury = Math.round((this.lifeExpForUserOnEarth * 0.24) * 10) / 10;
    let lifeExpVenus = Math.round((this.lifeExpForUserOnEarth * 0.62) * 10) / 10;
    let lifeExpMars = Math.round((this.lifeExpForUserOnEarth * 1.88) * 10) / 10;
    let lifeExpJupiter = Math.round((this.lifeExpForUserOnEarth * 11.86) * 10) / 10;

    lifeExpectancyForEachPlanet.push(lifeExpMercury, lifeExpVenus, lifeExpMars, lifeExpJupiter);

    return lifeExpectancyForEachPlanet;
  }
  yearsToLive () {

    let yearsToLive = this.lifeExpForUserOnEarth - this.userAge;
    let yearsToLiveOnEachPlanet = [];

    let yearsToLiveOnMercury = Math.round(( yearsToLive * 0.24) * 10) / 10;
    let yearsToLiveOnVenus = Math.round(( yearsToLive * 0.62) * 10) / 10;
    let yearsToLiveOnMars = Math.round(( yearsToLive * 1.88) * 10) / 10;
    let yearsToLiveOnJupiter = Math.round(( yearsToLive * 11.86) * 10) / 10;

    yearsToLiveOnEachPlanet.push(yearsToLiveOnMercury, yearsToLiveOnVenus, yearsToLiveOnMars, yearsToLiveOnJupiter);

    return yearsToLiveOnEachPlanet;
  }
  surpassed() {
    if (this.userAge > this.lifeExpForUserOnEarth) {
      return `Amazing, it looks like<br> you have surpassed the average life expectancy by ${this.userAge - this.lifeExpForUserOnEarth} years!` ;
    } else {
      return `You'll reach your average life expectancy in ${this.lifeExpForUserOnEarth - this.userAge} years!`;
    }
  }

}

// Independent Project objectives reached