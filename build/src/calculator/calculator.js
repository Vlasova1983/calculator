import { solution } from "./components/solution.js";
import { buttonsMemory } from "./components/memoryButons.js";
import { buttonsOperetions } from "./components/operationsButtons.js";
import { buttonsFunctional } from "./components/functionalButton.js";
import { buttonsNumber } from "./components/numbersButtons.js";
import { numbersButtons, operationsButtons } from "./helpers/date.js";
import { createNumbers, createOpration, createResult, onClickClaerAll, singNumber } from "./actions/actions.js";
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
const btnAll = document.querySelectorAll('.btn');
const data = {
    finish: false,
    firstNumber: '',
    secondNumber: '',
    sing: ''
};
let memory = '';
const onClickBtn = (item) => {
    let key = item.textContent;
    ;
    if (numbersButtons.includes(key)) {
        createNumbers(key, data);
        if (data.secondNumber === '' && data.sing === '') {
            solutionInput.textContent = data.firstNumber;
        }
        else if (data.secondNumber !== '' && data.sing !== '' && data.finish) {
            solutionInput.textContent = data.secondNumber;
        }
        else {
            solutionInput.textContent = data.secondNumber;
        }
    }
    if (operationsButtons.includes(key) && key !== '=') {
        createOpration(key, data);
        solutionInput.textContent = data.sing;
    }
    switch (key) {
        case '=':
            createResult(data);
            solutionInput.textContent = data.firstNumber;
            break;
        case '+/-':
            singNumber(data);
            if (data.sing === '') {
                solutionInput.textContent = data.firstNumber;
            }
            else {
                solutionInput.textContent = data.secondNumber;
            }
            break;
        case 'ac':
            onClickClaerAll(data);
            solutionInput.textContent = "0";
            break;
        case 'MC':
            memory = '0';
            break;
        case 'M+':
            memory = String(Number(memory) + Number(solutionInput.textContent));
            break;
        case 'M-':
            memory = String(Number(memory) - Number(solutionInput.textContent));
            break;
        case 'MM':
            solutionInput.textContent = memory;
            break;
    }
    ;
};
btnAll.forEach((item) => { item.addEventListener('click', () => onClickBtn(item)); });
