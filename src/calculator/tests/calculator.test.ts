
import {onClickClaerAll,singNumber,createResult,createOpration,createNumbers} from "../actions/actions";

describe('onClickClaerAll',()=>{   
    test('test1',()=>{        
        expect(onClickClaerAll({finish:false,firstNumber:"0.890", secondNumber:"788",sing:"+"})).toStrictEqual({finish:false,firstNumber:"", secondNumber:"",sing:""});        
    }) 
    test('test2',()=>{       
        expect(onClickClaerAll({finish:true,firstNumber:"5246", secondNumber:"21321",sing:"*"})).toStrictEqual({finish:false,firstNumber:"", secondNumber:"",sing:""});       
    })
    test('test3',()=>{        
        expect(onClickClaerAll({finish:false,firstNumber:"205", secondNumber:"13213.313",sing:"/"})).toStrictEqual({finish:false,firstNumber:"", secondNumber:"",sing:""});       
    })
    test('test4',()=>{        
        expect(onClickClaerAll({finish:false,firstNumber:"103", secondNumber:"713",sing:"-"})).toStrictEqual({finish:false,firstNumber:"", secondNumber:"",sing:""});       
    })
    test('test5',()=>{        
        expect(onClickClaerAll({finish:false,firstNumber:"654654", secondNumber:"4582",sing:"+"})).toStrictEqual({finish:false,firstNumber:"", secondNumber:"",sing:""});     
    })   
})

describe('createOpration',()=>{   
    test('test1',()=>{        
        expect(createOpration('/',{finish:false,firstNumber:"0.890", secondNumber:"788",sing:"+"})).toStrictEqual({finish:false,firstNumber:"0.890", secondNumber:"788",sing:"/"});        
    }) 
    test('test2',()=>{       
        expect(createOpration('+',{finish:true,firstNumber:"5246", secondNumber:"21321",sing:"*"})).toStrictEqual({finish:true,firstNumber:"5246", secondNumber:"21321",sing:"+"});       
    })
    test('test3',()=>{        
        expect(createOpration('*',{finish:false,firstNumber:"205", secondNumber:"13213.313",sing:"/"})).toStrictEqual({finish:false,firstNumber:"205", secondNumber:"13213.313",sing:"*"});       
    })
    test('test4',()=>{        
        expect(createOpration('+',{finish:false,firstNumber:"103", secondNumber:"713",sing:"-"})).toStrictEqual({finish:false,firstNumber:"103", secondNumber:"713",sing:"+"});       
    })
    test('test5',()=>{        
        expect(createOpration('/',{finish:false,firstNumber:"654654", secondNumber:"4582",sing:"+"})).toStrictEqual({finish:false,firstNumber:"654654", secondNumber:"4582",sing:"/"});     
    })   
})

describe('createNumbers',()=>{   
    test('test1',()=>{        
        expect(createNumbers('6',{finish:false,firstNumber:"", secondNumber:"",sing:""})).toStrictEqual({finish:false,firstNumber:"6", secondNumber:"",sing:""});        
    }) 
    test('test2',()=>{       
        expect(createNumbers('5',{finish:false,firstNumber:"6", secondNumber:"",sing:""})).toStrictEqual({finish:false,firstNumber:"65", secondNumber:"",sing:""});       
    })
    test('test3',()=>{        
        expect(createNumbers('2',{finish:false,firstNumber:"20", secondNumber:"",sing:"/"})).toStrictEqual({finish:false,firstNumber:"20", secondNumber:"2",sing:"/"});       
    })
    test('test4',()=>{        
        expect(createNumbers('9',{finish:false,firstNumber:"3", secondNumber:"2",sing:"="})).toStrictEqual({finish:false,firstNumber:"3", secondNumber:"29",sing:"="});       
    })
    test('test5',()=>{        
        expect(createNumbers('.',{finish:false,firstNumber:"23", secondNumber:"13",sing:"+"})).toStrictEqual({finish:false,firstNumber:"23", secondNumber:"13.",sing:"+"});     
    })   
})

describe('singNumber',()=>{   
    test('test1',()=>{        
        expect(singNumber({finish:false,firstNumber:"6", secondNumber:"",sing:""})).toStrictEqual({finish:false,firstNumber:"-6", secondNumber:"",sing:""});        
    }) 
    test('test2',()=>{       
        expect(singNumber({finish:false,firstNumber:"67", secondNumber:"5",sing:"/"})).toStrictEqual({finish:false,firstNumber:"67", secondNumber:"-5",sing:"/"});       
    })
    test('test3',()=>{        
        expect(singNumber({finish:false,firstNumber:"-20", secondNumber:"",sing:""})).toStrictEqual({finish:false,firstNumber:"20", secondNumber:"",sing:""});       
    })    
})
describe('createResult',()=>{   
    test('test1',()=>{        
        expect(createResult({finish:false,firstNumber:"5", secondNumber:"4",sing:"+"})).toStrictEqual({finish:true,firstNumber:"9", secondNumber:"4",sing:""});        
    }) 
    test('test2',()=>{       
        expect(createResult({finish:false,firstNumber:"20", secondNumber:"4",sing:"/"})).toStrictEqual({finish:true,firstNumber:"5", secondNumber:"4",sing:""});       
    })
    test('test3',()=>{        
        expect(createResult({finish:false,firstNumber:"33", secondNumber:"3",sing:"*"})).toStrictEqual({finish:true,firstNumber:"99", secondNumber:"3",sing:""});      
    })
    test('test4',()=>{        
        expect(createResult({finish:false,firstNumber:"22", secondNumber:"1.5",sing:"+"})).toStrictEqual({finish:true,firstNumber:"23.5", secondNumber:"1.5",sing:""});       
    })
    test('test5',()=>{        
        expect(createResult({finish:false,firstNumber:"5", secondNumber:"2",sing:"/"})).toStrictEqual({finish:true,firstNumber:"2.5", secondNumber:"2",sing:""});     
    })   
})


