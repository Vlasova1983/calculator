// розмітка кнопок з функціональними кнопками(очістити екран, знак числа, проценти)
import { functionalButton} from "../helpers/date.js";
export const buttonsFunctional:string=functionalButton.map(item=>`<button class="btn" name='${item}' id="functional">${item}</button>`).join('');