// Main screen.
let mainScreen = document.querySelector(".mainScreen");

// Select buttons.
const clear = document.querySelector(".clearButton");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const number0 = document.querySelector(".number0");

const dot = document.querySelector(".dot");
const sumButton = document.querySelector(".sumButton");
const totalButton = document.querySelector(".totalButton");
const division = document.querySelector(".division");
const multiplicationButton = document.querySelector(".multiplicationButton");
const minusButton = document.querySelector(".minusButton");

function handleNumber(number) {
  mainScreen.value += number;
}

clear.addEventListener("click", () => {
  mainScreen.value = "";
});

function displayResult() {
  mainScreen.value = eval(mainScreen.value);
}

//Buttons

number1.addEventListener("click", () => {
  handleNumber("1");
});

number2.addEventListener("click", () => {
  handleNumber("2");
});

number3.addEventListener("click", () => {
  handleNumber("3");
});

number4.addEventListener("click", () => {
  handleNumber("4");
});

number5.addEventListener("click", () => {
  handleNumber("5");
});

number6.addEventListener("click", () => {
  handleNumber("6");
});

number7.addEventListener("click", () => {
  handleNumber("7");
});

number8.addEventListener("click", () => {
  handleNumber("8");
});

number9.addEventListener("click", () => {
  handleNumber("9");
});

number0.addEventListener("click", () => {
  handleNumber("0");
});

dot.addEventListener("click", () => {
  handleNumber(".");
});

sumButton.addEventListener("click", () => {
  handleNumber("+");
});

multiplicationButton.addEventListener("click", () => {
  handleNumber("*");
});

minusButton.addEventListener("click", () => {
  handleNumber("-");
});

division.addEventListener("click", () => {
  handleNumber("/");
});

totalButton.addEventListener("click", () => {
  displayResult();
});
