"use strict";
let firstNumber = '';
let secondNumber = '';
let sing = '';
let finish = false;
let key = '';
let memory = '';
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const opirations = ['-', '+', '*', '/'];
const screenResult = document.getElementById('screen');
const clearAll = document.getElementById('ac');
const btnAll = document.querySelectorAll('.btn');
const onClickClaerAll = () => {
    firstNumber = '';
    secondNumber = '';
    sing = '';
    finish = false;
    screenResult.textContent = '0';
};
const onClickBtn = (evt) => {
    key = evt.target.textContent;
    if (numbers.includes(key))
        createNumbers(key);
    if (opirations.includes(key))
        createkOpration(key);
    switch (key) {
        case '=':
            createResult();
            break;
        case '+/-':
            singNumber();
            break;
        case 'MC':
            clearMemory();
            break;
        case 'MM':
            hendleShowMemory();
            break;
        case 'M+':
            memoryPlus();
            break;
        case 'M-':
            memoryMinus();
            break;
    }
    ;
};
const createResult = () => {
    if (secondNumber === '=')
        secondNumber = firstNumber;
    switch (sing) {
        case '+':
            firstNumber = String(Number(firstNumber) + Number(secondNumber));
            break;
        case '-':
            firstNumber = String(Number(firstNumber) - Number(secondNumber));
            break;
        case '*':
            firstNumber = String(Number(firstNumber) * Number(secondNumber));
            break;
        case '/':
            if (Number(secondNumber) === 0) {
                firstNumber = '';
                secondNumber = '';
                sing = '';
                screenResult.textContent = 'error';
                return;
            }
            firstNumber = String(Number(firstNumber) / Number(secondNumber));
            break;
    }
    finish = true;
    screenResult.textContent = firstNumber;
};
const createNumbers = (key) => {
    if (secondNumber === '' && sing === '') {
        if (key === '.' && firstNumber.includes('.'))
            return;
        firstNumber += key;
        screenResult.textContent = firstNumber;
    }
    else if (secondNumber !== '' && sing !== '' && finish) {
        finish = false;
        if (key === '.' && secondNumber.includes('.'))
            return;
        secondNumber = key;
        screenResult.textContent = secondNumber;
    }
    else {
        if (key === '.' && secondNumber.includes('.'))
            return;
        secondNumber += key;
        screenResult.textContent = secondNumber;
    }
    return;
};
const createkOpration = (key) => {
    sing = key;
    screenResult.textContent = sing;
    return;
};
const singNumber = () => {
    if (sing === '') {
        firstNumber.includes('-') ? firstNumber = firstNumber.slice(1) : firstNumber = '-' + firstNumber;
        screenResult.textContent = firstNumber;
    }
    else {
        secondNumber.includes('-') ? secondNumber = secondNumber.slice(1) : secondNumber = '-' + secondNumber;
        screenResult.textContent = secondNumber;
    }
};
const memoryPlus = () => {
    memory = String(Number(memory) + Number(screenResult.textContent));
};
const memoryMinus = () => {
    memory = String(Number(memory) - Number(screenResult.textContent));
};
const clearMemory = () => {
    memory = '0';
};
const hendleShowMemory = () => {
    screenResult.textContent = memory;
};
clearAll.addEventListener('click', onClickClaerAll);
btnAll.forEach((item) => { item.addEventListener('click', onClickBtn); });
