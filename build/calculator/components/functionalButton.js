import { functionalButton } from "../helpers/date.js";
export const buttonsFunctional = functionalButton.map(item => `<button class="btn" name='${item}' id="functional">${item}</button>`).join('');
