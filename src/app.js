/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let symbols = ["❤", "♦", "♠", "♣"];
  let numbers = new Array(12).fill(1).map((accumulator, index) => index + 1);

  let randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  let randomNumberIndex = Math.floor(Math.random() * numbers.length);

  let randomSymbol = symbols[randomSymbolIndex];
  let randomNumber = numbers[randomNumberIndex];

  document.querySelector("#number").innerHTML = randomNumber;
  function symbolGenerator() {
    if (randomSymbolIndex <= 1) {
      document.querySelector("#symbol").innerHTML = `<div
      class="position-absolute top-0 start-0 ps-3 fs-1 text-danger"
      id="symbol"
    >${randomSymbol}</div>`;
      document.querySelector("#symbol2").innerHTML = `<div
      class="position-absolute bottom-0 end-0 pe-3 fs-1 text-danger"
      id="symbol2"
    >${randomSymbol}</div>`;
    } else {
      document.querySelector("#symbol").innerHTML = `<div
      class="position-absolute top-0 start-0 ps-3 fs-1 text-dark"
      id="symbol"
    >${randomSymbol}</div>`;
      document.querySelector("#symbol2").innerHTML = `<div
      class="position-absolute bottom-0 end-0 pe-3 fs-1 text-dark"
      id="symbol2"
    >${randomSymbol}</div>`;
    }
  }
  symbolGenerator();
};
