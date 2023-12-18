// розмітку кнопок
type itemArray= {
    content:string,    
    id:string
}
type arrayButtons=itemArray[];
// дані по яких малюється кнопки
const arrayButtons:arrayButtons=[
    {content:'MC', id:'MC'},
    {content:'MM', id:'MM'},
    {content:'M+', id:'MP'},
    {content:'M-', id:'MMin'},
    {content:'ac', id:'ac'},    
    {content:'+/-', id:'sing-number'},
    {content:'%', id:'interest'},
    {content:'/', id:'opiration'},     
    {content:'7', id:'number'},
    {content:'8', id:'number'},
    {content:'9', id:'number'},
    {content:'*', id:'opiration'},  
    {content:'4', id:'number'},
    {content:'5', id:'number'},
    {content:'6', id:'number'},
    {content:'-', id:'opiration'},    
    {content:'1', id:'number'},
    {content:'2', id:'number'},
    {content:'3', id:'number'},
    {content:'+', id:'opiration'},    
    {content:'0', id:'number-0'},
    {content:'.', id:'number'},
    {content:'=', id:'result'},     
];

export const buttons:string=arrayButtons.map(item=>`<button class="btn" id="${item.id}">${item.content}</button>`).join(''); // розмітка кнопок