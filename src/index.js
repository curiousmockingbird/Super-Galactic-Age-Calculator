import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator.js';

function handleFormSubmission(event) {
  event.preventDefault();
  let calculator = new Calculator(85,95);

  return calculator;

}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});
