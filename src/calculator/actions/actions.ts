//  функція , яка спрацьовує на кнопки з цифрами та крапкою, формує два аргумента , з якими далі роблять обчислення
const createNumbers=(key:string,data:{finish:boolean,firstNumber:string, secondNumber:string,sing:string})
:{finish:boolean,firstNumber:string, secondNumber:string,sing:string}=>
{  
     
    if(data.secondNumber==='' && data.sing===''){
        if (key==='.'&& data.firstNumber.includes('.')) return data
        data.firstNumber+=key;
        return data;          
    } else if(data.secondNumber!=='' && data.sing!=='' && data.finish){
        data.finish=false;
        if ( key==='.'&& data.secondNumber.includes('.')) return data;
        data.secondNumber=key;       
        return data;        
    }
    else {
        if ( key==='.'&& data.secondNumber.includes('.')) return data;
        data.secondNumber+=key;
        return data;             
    }       
}
// функція вибору опирації над аргументами
const createOpration=(key:string,data:{finish:boolean,firstNumber:string, secondNumber:string,sing:string})
:{finish:boolean,firstNumber:string, secondNumber:string,sing:string}=>
{   
    data.sing=key;        
    return data  
}
//  функція , яка спрацьовує на кнопку "="
const createResult=(data:{finish:boolean,firstNumber:string, secondNumber:string,sing:string})
:{finish:boolean,firstNumber:string, secondNumber:string,sing:string}=>
{ 
    if (data.secondNumber==='=') data.secondNumber=data.firstNumber;   
    switch (data.sing){
        case '+':
            data.firstNumber=String(Number(data.firstNumber)+Number(data.secondNumber));            
            break;
        case '-':
            data.firstNumber=String(Number(data.firstNumber)-Number(data.secondNumber));
            break;
        case '*':
            data.firstNumber=String(Number(data.firstNumber)*Number(data.secondNumber));
            break;
        case '/':
            if(Number(data.secondNumber)===0){
                data.firstNumber = '';
                data.secondNumber = '';
                data.sing ='';
                data.firstNumber='error';              
            } 
            data.firstNumber=String(Number(data.firstNumber)/Number(data.secondNumber));
            break;   
    }
    data.finish=true;
    data.sing='';     
    return data;         
}

// функція , яка спрацьовує на кнопку "+/-"
const singNumber =(data:{finish:boolean,firstNumber:string, secondNumber:string,sing:string})
:{finish:boolean,firstNumber:string, secondNumber:string,sing:string}=>
{    
    if( data.sing ===''){
        data.firstNumber.includes('-') ?data.firstNumber=data.firstNumber.slice(1):data.firstNumber='-'+data.firstNumber;
        return data       
    } else {
        data.secondNumber.includes('-') ?data.secondNumber=data.secondNumber.slice(1):data.secondNumber='-'+data.secondNumber;        
        return data       
    }
}

// функція очищення даних на екрані, спрацьовує на кнопку "ас"
const onClickClaerAll =(data:{finish:boolean,firstNumber:string, secondNumber:string,sing:string})
:{finish:boolean,firstNumber:string, secondNumber:string,sing:string}=>
{   
    data.firstNumber = '';
    data.secondNumber = '';
    data.sing ='';
    data.finish=false;
    return data;   
}

export {    
    onClickClaerAll,  
    singNumber,
    createResult,
    createOpration,
    createNumbers,    
}