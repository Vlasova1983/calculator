import { numbersButtons, operationsButtons } from "../helpers/date.js";
let firstNumber = '';
let secondNumber = '';
let sing = '';
let finish = false;
let memory = '';
const onClickClaerAll = (solutionInput) => {
    firstNumber = '';
    secondNumber = '';
    sing = '';
    finish = false;
    solutionInput.textContent = '0';
};
const onClickBtn = (item, solutionInput) => {
    let key = item.textContent;
    ;
    if (numbersButtons.includes(key))
        createNumbers(key, solutionInput);
    if (operationsButtons.includes(key))
        createOpration(key, solutionInput);
    switch (key) {
        case '=':
            createResult(solutionInput);
            break;
        case '+/-':
            singNumber(solutionInput);
            break;
        case 'MC':
            memory = '0';
            break;
        case 'MM':
            solutionInput.textContent = memory;
            break;
        case 'M+':
            memory = String(Number(memory) + Number(solutionInput.textContent));
            break;
        case 'M-':
            memory = String(Number(memory) - Number(solutionInput.textContent));
            break;
    }
    ;
};
const createNumbers = (key, solutionInput) => {
    if (secondNumber === '' && sing === '') {
        if (key === '.' && firstNumber.includes('.'))
            return;
        firstNumber += key;
        solutionInput.textContent = firstNumber;
    }
    else if (secondNumber !== '' && sing !== '' && finish) {
        finish = false;
        if (key === '.' && secondNumber.includes('.'))
            return;
        secondNumber = key;
        solutionInput.textContent = secondNumber;
    }
    else {
        if (key === '.' && secondNumber.includes('.'))
            return;
        secondNumber += key;
        solutionInput.textContent = secondNumber;
    }
    return;
};
const createOpration = (key, solutionInput) => {
    if (key === '=')
        return;
    sing = key;
    solutionInput.textContent = sing;
    return;
};
const createResult = (solutionInput) => {
    if (secondNumber === '=')
        secondNumber = firstNumber;
    console.log(sing);
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
                solutionInput.textContent = 'error';
                return;
            }
            firstNumber = String(Number(firstNumber) / Number(secondNumber));
            break;
    }
    finish = true;
    solutionInput.textContent = firstNumber;
};
const singNumber = (solutionInput) => {
    if (sing === '') {
        firstNumber.includes('-') ? firstNumber = firstNumber.slice(1) : firstNumber = '-' + firstNumber;
        solutionInput.textContent = firstNumber;
    }
    else {
        secondNumber.includes('-') ? secondNumber = secondNumber.slice(1) : secondNumber = '-' + secondNumber;
        solutionInput.textContent = secondNumber;
    }
};
export { onClickBtn, onClickClaerAll, singNumber, createResult, createOpration, createNumbers };
