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
  document.querySelector("#symbol").innerHTML = randomSymbol;
  document.querySelector("#symbol2").innerHTML = randomSymbol;
};
