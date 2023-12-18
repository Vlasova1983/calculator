//розмітка  калькулятора
import { buttons } from "./buttons.js";
import { solutionBlock } from "./solution.js";

export const calculatorScreen:string =
 `<div class="calculator_conteiner">
    <div class="solution_conteiner">${solutionBlock}</div>
    <div class="btn_conteiner">${buttons}</div>
</div>`;