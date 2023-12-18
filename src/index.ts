import {calculatorScreen} from "./calculator/calculator.js"

const calculator = document.querySelector(".calculator") as HTMLElement;
calculator.insertAdjacentHTML("beforeend", calculatorScreen);