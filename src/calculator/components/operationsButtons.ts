// розмітка кнопок з операціями

import { operationsButtons } from "../helpers/date.js";
export const buttonsOperetions:string=operationsButtons.map(item=>`<button class="btn" id="operetion">${item}</button>`).join('');