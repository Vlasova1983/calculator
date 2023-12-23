// розмітка кнопок з цифрами
import { numbersButtons } from "../helpers/date.js";
export const buttonsNumber:string=numbersButtons.map(item=>item!=='0'
? `<button class="btn" id="number">${item}</button>`
: `<button class="btn" id="number-0">${item}</button>`).join(''); 