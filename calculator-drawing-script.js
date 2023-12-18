"use strict";
// цей скрипт малює розмітку калькулятора
// селектор в HTML коды, після якого буде малюватися розмітка
const calculator = document.querySelector(".calculator");
// дані по яких малюється кнопки
const arrayButtons = [
    { content: 'MC', id: 'MC' },
    { content: 'MM', id: 'MM' },
    { content: 'M+', id: 'MP' },
    { content: 'M-', id: 'MMin' },
    { content: 'ac', id: 'ac' },
    { content: '+/-', id: 'sing-number' },
    { content: '%', id: 'interest' },
    { content: '/', id: 'opiration' },
    { content: '7', id: 'number' },
    { content: '8', id: 'number' },
    { content: '9', id: 'number' },
    { content: '*', id: 'opiration' },
    { content: '4', id: 'number' },
    { content: '5', id: 'number' },
    { content: '6', id: 'number' },
    { content: '-', id: 'opiration' },
    { content: '1', id: 'number' },
    { content: '2', id: 'number' },
    { content: '3', id: 'number' },
    { content: '+', id: 'opiration' },
    { content: '0', id: 'number-0' },
    { content: '.', id: 'number' },
    { content: '=', id: 'result' },
];
const buttons = arrayButtons.map(item => `<button class="btn" id="${item.id}">${item.content}</button>`).join(''); // розмітка кнопок
const solutionBlock = `<p class="solution" id ="screen">0<p/>`; // розмітка екрана результата рахувань
const calculatorScreen = `<div class="calculator_conteiner">
                            <div class="solution_conteiner">${solutionBlock}</div>
                            <div class="btn_conteiner">${buttons}</div>
                        </div>`; // розмітка всього калькулятора
calculator.insertAdjacentHTML("beforeend", calculatorScreen); // розбирає вказаний текст як HTML і вставляє отримані вузли в дерево DOM
