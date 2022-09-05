import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

function handleFormSubmission(event) {
  event.preventDefault();
  
  
  let userAge = parseInt(document.querySelector("input#ageInput").value);
  let text1 = document.getElementById("text1");

  let calculator = new Calculator(userAge);
  let mercury = calculator.toMercuryYears();
  let venus = calculator.toVenusYears();
  let mars = calculator.toMarsYears();
  let jupiter =calculator.toJupiterYears();

  text1.innerHTML = `
  If you lived on Mercury, you'd be ${mercury} y.o,<br>
  if you lived on Venus, ${venus} y.o,<br>
  ${mars} y.o if on Mars, and ${jupiter} y.o if you lived on Jupiter!
  `;


  document.getElementById("results").removeAttribute("class", "hidden");
  window.scrollBy(0,250);
}

function handleSecondForm(event) {
  event.preventDefault();
  
  let userAge = parseInt(document.querySelector("input#ageInput").value);
  let lifeExpForUserOnEarth = parseInt(document.querySelector("input#lifeExpInput").value);
  let text2 = document.getElementById("text2");

  let calculator = new Calculator(userAge, lifeExpForUserOnEarth);
  let yearsToLive = calculator.yearsToLive();
  let surpassed = calculator.surpassed();
  
  if (userAge > lifeExpForUserOnEarth) {
    text2.innerHTML =`${surpassed}`;
  } else {
    text2.innerHTML =`
    ${surpassed}
    <br><br>
    BY THE WAY,<br>
    If you lived on Mercury, you'd reach your life expectancy in ${yearsToLive[0]} years,<br> if you lived on Venus, in ${yearsToLive[1]} years, in ${yearsToLive[2]} years if on Mars,<br> and in ${yearsToLive[3]} years if you lived on Jupiter!
  `;
  }
  
  

  document.getElementById("results2").removeAttribute("class", "hidden");
  window.scrollBy(0,1250);
}



window.addEventListener("load", function() {
  let form1 = document.querySelector("form#form1");
  form1.addEventListener("submit", handleFormSubmission);
  let form2 = document.querySelector("form#form2");
  form2.addEventListener("submit", handleSecondForm);

});
