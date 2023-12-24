const createNumbers = (key, data) => {
    if (data.secondNumber === '' && data.sing === '') {
        if (key === '.' && data.firstNumber.includes('.'))
            return data;
        data.firstNumber += key;
        return data;
    }
    else if (data.secondNumber !== '' && data.sing !== '' && data.finish) {
        data.finish = false;
        if (key === '.' && data.secondNumber.includes('.'))
            return data;
        data.secondNumber = key;
        return data;
    }
    else {
        if (key === '.' && data.secondNumber.includes('.'))
            return data;
        data.secondNumber += key;
        return data;
    }
};
const createOpration = (key, data) => {
    data.sing = key;
    return data;
};
const createResult = (data) => {
    if (data.secondNumber === '=')
        data.secondNumber = data.firstNumber;
    switch (data.sing) {
        case '+':
            data.firstNumber = String(Number(data.firstNumber) + Number(data.secondNumber));
            break;
        case '-':
            data.firstNumber = String(Number(data.firstNumber) - Number(data.secondNumber));
            break;
        case '*':
            data.firstNumber = String(Number(data.firstNumber) * Number(data.secondNumber));
            break;
        case '/':
            if (Number(data.secondNumber) === 0) {
                data.firstNumber = '';
                data.secondNumber = '';
                data.sing = '';
                data.firstNumber = 'error';
            }
            data.firstNumber = String(Number(data.firstNumber) / Number(data.secondNumber));
            break;
    }
    data.finish = true;
    data.sing = '';
    return data;
};
const singNumber = (data) => {
    if (data.sing === '') {
        data.firstNumber.includes('-') ? data.firstNumber = data.firstNumber.slice(1) : data.firstNumber = '-' + data.firstNumber;
        return data;
    }
    else {
        data.secondNumber.includes('-') ? data.secondNumber = data.secondNumber.slice(1) : data.secondNumber = '-' + data.secondNumber;
        return data;
    }
};
const onClickClaerAll = (data) => {
    data.firstNumber = '';
    data.secondNumber = '';
    data.sing = '';
    data.finish = false;
    return data;
};
export { onClickClaerAll, singNumber, createResult, createOpration, createNumbers, };
