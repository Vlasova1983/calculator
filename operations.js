"use strict";
let firstNumber = ''; // перший аргумент 
let secondNumber = ''; // другий аргумент
let sing = ''; // операція
let finish = false;
let key = ''; // ключ кнопки
let memory = ''; // змінна для маніпуляцій з пам'ятью
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const opirations = ['-', '+', '*', '/'];
const screenResult = document.getElementById('screen'); // екран рузультату
const clearAll = document.getElementById('ac'); // кнопка очищення екрану(даних)
const btnAll = document.querySelectorAll('.btn'); //  масив всіх кнопок окрім очищення данних
// функція очищення даних на екрані, спрацьовує на кнопку "ас"
const onClickClaerAll = () => {
    firstNumber = '';
    secondNumber = '';
    sing = '';
    finish = false;
    screenResult.textContent = '0';
};
// функція, яка обробляє події на всі кнопки по ключу
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
//  функція , яка спрацьовує на кнопку "="
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
//  функція , яка спрацьовує на кнопки з цифрами на крапкою, формує два аргумента , з якими далі роблять обчислення
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
// функція вибору опирації над аргументами
const createkOpration = (key) => {
    sing = key;
    screenResult.textContent = sing;
    return;
};
// функція , яка спрацьовує на кнопку "+/-"
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
// функція додавання в пям'ять
const memoryPlus = () => {
    memory = String(Number(memory) + Number(screenResult.textContent));
};
// функція віднімання з пям'яті
const memoryMinus = () => {
    memory = String(Number(memory) - Number(screenResult.textContent));
};
// функція очищення пам'яті
const clearMemory = () => {
    memory = '0';
};
//  функція виводу значення пям'яті на екран
const hendleShowMemory = () => {
    screenResult.textContent = memory;
};
clearAll.addEventListener('click', onClickClaerAll);
btnAll.forEach((item) => { item.addEventListener('click', onClickBtn); });