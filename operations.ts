let firstNumber:string=''; // перший аргумент 
let secondNumber:string='';// другий аргумент
let sing:string='';// операція
let finish:boolean=false;
let key:string='';// ключ кнопки
let memory:string='';// змінна для маніпуляцій з пам'ятью

const numbers:string[]=['0','1','2','3','4','5','6','7','8','9','.'];
const opirations:string[]=['-','+','*','/'];


const screenResult =  document.getElementById('screen') as HTMLElement;// екран рузультату
const clearAll =  document.getElementById('ac') as HTMLElement;// кнопка очищення екрану(даних)
const btnAll=  document.querySelectorAll('.btn');//  масив всіх кнопок окрім очищення данних


// функція очищення даних на екрані, спрацьовує на кнопку "ас"
const onClickClaerAll =():void=>{
    firstNumber = '';
    secondNumber = '';
    sing ='';
    finish=false;
    screenResult.textContent = '0';
}
// функція, яка обробляє події на всі кнопки по ключу
const onClickBtn=(evt:any):void=>{
    key= evt.target.textContent;
    if(numbers.includes(key)) createNumbers(key);
    if(opirations.includes(key)) createkOpration(key);

    switch (key){
        case '=':createResult();
            break;
        case '+/-': singNumber();         
            break; 
        case 'MC':clearMemory() ;         
            break;
        case 'MM': hendleShowMemory();         
            break;
        case 'M+': memoryPlus();         
            break; 
        case 'M-': memoryMinus() ;         
            break;      
    };       
}
//  функція , яка спрацьовує на кнопку "="
const createResult=():void=>{    
    if (secondNumber==='=') secondNumber=firstNumber;
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
                screenResult.textContent='error'               
               return
            } 
            firstNumber=String(Number(firstNumber)/Number(secondNumber));
            break;   
    }
    finish=true;        
    screenResult.textContent=firstNumber;      
        
}
//  функція , яка спрацьовує на кнопки з цифрами на крапкою, формує два аргумента , з якими далі роблять обчислення
const createNumbers=(key:string):void=>{
    
    if(secondNumber==='' && sing===''){
        if (key==='.'&& firstNumber.includes('.'))return
        firstNumber+=key;
        screenResult.textContent=firstNumber;
        
          
    } else if(secondNumber!=='' && sing!=='' && finish){
        finish=false;
        if ( key==='.'&& secondNumber.includes('.')) return;
        secondNumber=key;       
        screenResult.textContent=secondNumber;
        
    }
    else {
        if ( key==='.'&& secondNumber.includes('.')) return;
        secondNumber+=key;
        screenResult.textContent=secondNumber;
             
    }
    return
}
// функція вибору опирації над аргументами
const createkOpration=(key:string):void=>{
    sing=key;
    screenResult.textContent=sing;
       
    return  
}
// функція , яка спрацьовує на кнопку "+/-"
const singNumber =():void=>{
    
    if( sing ===''){
        firstNumber.includes('-') ?firstNumber=firstNumber.slice(1):firstNumber='-'+firstNumber;
        screenResult.textContent=firstNumber
       
    } else {

        secondNumber.includes('-')  ?secondNumber=secondNumber.slice(1):secondNumber='-'+secondNumber;        
        screenResult.textContent=secondNumber
        
    }
    
}
// функція додавання в пям'ять
const memoryPlus=():void=>{
    memory=String(Number(memory)+Number(screenResult.textContent))    
}
// функція віднімання з пям'яті
const memoryMinus = ():void=>{
    memory=String(Number(memory)-Number(screenResult.textContent))    
}
// функція очищення пам'яті
const clearMemory=():void=>{
    memory='0';
}
//  функція виводу значення пям'яті на екран
const hendleShowMemory=()=>{
    screenResult.textContent=memory;
}





clearAll.addEventListener('click', onClickClaerAll)
btnAll.forEach((item)=>{item.addEventListener('click', onClickBtn)})

