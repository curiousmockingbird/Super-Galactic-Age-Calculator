import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

function handleFormSubmission(event) {
  event.preventDefault();
  
  
  let userAge = parseInt(document.querySelector("input#ageInput").value);
  let lifeExpForUserOnEarth = parseInt(document.querySelector("input#lifeExpInput").value);
  let text1 = document.getElementById("text1");

  let calculator = new Calculator(userAge, lifeExpForUserOnEarth);
  let mercury = calculator.toMercuryYears();
  let venus = calculator.toVenusYears();
  let mars = calculator.toMarsYears();
  let jupiter =calculator.toJupiterYears();

  text1.innerHTML = ` If you lived in Mercury, you'd be ${mercury} y.o,<br> if you lived in Venus, ${venus} y.o,<br> ${mars} y.o if in Mars, and ${jupiter} y.o if you lived in Jupiter!`;


  document.getElementById("results").removeAttribute("class", "hidden");
  return calculator;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form#form1");
  form.addEventListener("submit", handleFormSubmission);
});
