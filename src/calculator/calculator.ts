import { solution } from "./components/solution.js";
import { buttonsMemory } from "./components/memoryButons.js";
import { buttonsOperetions } from "./components/operationsButtons.js"; 
import { buttonsFunctional } from "./components/functionalButton.js";
import { buttonsNumber } from "./components/numbersButtons.js";
import { onClickBtn,onClickClaerAll } from "./actions/actions.js";

//розмітка  калькулятора
const calculator = document.querySelector(".calculator") as HTMLElement;
const calculatorScreen:string =
 `<div class="calculator_conteiner">
    <div class="solution_conteiner">${solution}</div>
    <div class="btn_conteiner">
        <div class="memory_conteiner">${buttonsMemory}</div>
        <div  class="flex_conteiner">
            <div  class="gap_conteiner">
                <div class="functional_conteiner">${ buttonsFunctional}</div>
                <div class="number_conteiner">${buttonsNumber}</div>
            </div>
            <div class="operetions_conteiner">${buttonsOperetions}</div>
        </div>
    </div>
</div>`;
calculator.insertAdjacentHTML("beforeend", calculatorScreen);

//обробка подій на калькуляторі
const solutionInput =  document.querySelector(".solution") as HTMLElement;// екран рузультату
const clearAll =  document.querySelector('[name = "ac"]')  as HTMLElement;// кнопка очищення екрану(даних)
const btnAll=  document.querySelectorAll('.btn');//  масив всіх кнопок окрім очищення данних
clearAll.addEventListener('click',()=> onClickClaerAll(solutionInput));
btnAll.forEach((item)=>{item.addEventListener('click', ()=>onClickBtn(item,solutionInput))});
