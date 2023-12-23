import { solution } from "./components/solution.js";
import { buttonsMemory } from "./components/memoryButons.js";
import { buttonsOperetions } from "./components/operationsButtons.js";
import { buttonsFunctional } from "./components/functionalButton.js";
import { buttonsNumber } from "./components/numbersButtons.js";
import { onClickBtn, onClickClaerAll } from "./actions/actions.js";
const calculator = document.querySelector(".calculator");
const calculatorScreen = `<div class="calculator_conteiner">
    <div class="solution_conteiner">${solution}</div>
    <div class="btn_conteiner">
        <div class="memory_conteiner">${buttonsMemory}</div>
        <div  class="flex_conteiner">
            <div  class="gap_conteiner">
                <div class="functional_conteiner">${buttonsFunctional}</div>
                <div class="number_conteiner">${buttonsNumber}</div>
            </div>
            <div class="operetions_conteiner">${buttonsOperetions}</div>
        </div>
    </div>
</div>`;
calculator.insertAdjacentHTML("beforeend", calculatorScreen);
const solutionInput = document.querySelector(".solution");
const clearAll = document.querySelector('[name = "ac"]');
const btnAll = document.querySelectorAll('.btn');
clearAll.addEventListener('click', () => onClickClaerAll(solutionInput));
btnAll.forEach((item) => { item.addEventListener('click', () => onClickBtn(item, solutionInput)); });
