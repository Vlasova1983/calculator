import { operationsButtons } from "../helpers/date.js";
export const buttonsOperetions = operationsButtons.map(item => `<button class="btn" id="operetion">${item}</button>`).join('');
