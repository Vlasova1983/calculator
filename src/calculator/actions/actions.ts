import { numbersButtons,operationsButtons } from "../helpers/date.js";

let firstNumber:string=''; // перший аргумент 
let secondNumber:string='';// другий аргумент
let sing:string='';// операція
let finish:boolean=false;
let memory:string='';// змінна для роботи з пам'ятью

// функція очищення даних на екрані, спрацьовує на кнопку "ас"
const onClickClaerAll =(solutionInput: any):void=>{   
    firstNumber = '';
    secondNumber = '';
    sing ='';
    finish=false;
    solutionInput.textContent = '0';   
}
// функція, яка обробляє події на всі кнопки по ключу
const onClickBtn=(item:any,solutionInput:any):void=>{   
    let key:string=item.textContent;;// ключ кнопки
   
    if(numbersButtons.includes(key)) createNumbers(key,solutionInput);
    if(operationsButtons.includes(key)) createOpration(key,solutionInput);

    switch (key){
        case '=':createResult(solutionInput);
            break;
        case '+/-':singNumber(solutionInput);         
            break; 
        case 'MC':memory='0'      
            break;
        case 'MM':solutionInput.textContent=memory;         
            break;
        case 'M+': memory=String(Number(memory)+Number(solutionInput.textContent));         
            break; 
        case 'M-': memory=String(Number(memory)-Number(solutionInput.textContent));        
            break;      
    };       
}

//  функція , яка спрацьовує на кнопки з цифрами та крапкою, формує два аргумента , з якими далі роблять обчислення
const createNumbers=(key:string,solutionInput:any):void=>{    
    if(secondNumber==='' && sing===''){
        if (key==='.'&& firstNumber.includes('.'))return
        firstNumber+=key;
        solutionInput.textContent=firstNumber;
        
          
    } else if(secondNumber!=='' && sing!=='' && finish){
        finish=false;
        if ( key==='.'&& secondNumber.includes('.')) return;
        secondNumber=key;       
        solutionInput.textContent=secondNumber;
        
    }
    else {
        if ( key==='.'&& secondNumber.includes('.')) return;
        secondNumber+=key;
        solutionInput.textContent=secondNumber;             
    }
    return
}

// функція вибору опирації над аргументами
const createOpration=(key:string,solutionInput:any):void=>{
    if(key==='=')  return
    sing=key;
    solutionInput.textContent=sing;      
    return  
}

//  функція , яка спрацьовує на кнопку "="
const createResult=(solutionInput:any):void=>{    
    if (secondNumber==='=') secondNumber=firstNumber;
    console.log(sing)
    switch (sing){
        case '+':
            firstNumber=String(Number(firstNumber)+Number(secondNumber));
            break;
        case '-':
            firstNumber=String(Number(firstNumber)-Number(secondNumber));
            break;
        case '*':
            firstNumber=String(Number(firstNumber)*Number(secondNumber));
            break;
        case '/':
            if(Number(secondNumber)===0){
                firstNumber = '';
                secondNumber = '';
                sing ='';
                solutionInput.textContent='error'               
               return
            } 
            firstNumber=String(Number(firstNumber)/Number(secondNumber));
            break;   
    }
    finish=true;        
    solutionInput.textContent=firstNumber;         
}

// функція , яка спрацьовує на кнопку "+/-"
const singNumber =(solutionInput:any):void=>{
    
    if( sing ===''){
        firstNumber.includes('-') ?firstNumber=firstNumber.slice(1):firstNumber='-'+firstNumber;
        solutionInput.textContent=firstNumber
       
    } else {

        secondNumber.includes('-')  ?secondNumber=secondNumber.slice(1):secondNumber='-'+secondNumber;        
        solutionInput.textContent=secondNumber
        
    }
    
}

export {
    onClickBtn,
    onClickClaerAll,  
    singNumber,
    createResult,
    createOpration,
    createNumbers
}