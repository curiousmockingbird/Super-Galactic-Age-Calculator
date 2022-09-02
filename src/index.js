import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

function handleFormSubmission(event) {
  event.preventDefault();
  
  
  let userAge = parseInt(document.querySelector("input#ageInput").value);
  let lifeExpForUserOnEarth = parseInt(document.querySelector("input#lifeExpInput").value);
  

  let calculator = new Calculator(userAge, lifeExpForUserOnEarth);
  
  return calculator;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});
