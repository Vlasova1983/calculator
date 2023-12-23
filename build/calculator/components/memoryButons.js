import { memoryButtons } from "../helpers/date.js";
export const buttonsMemory = memoryButtons.map(item => `<button class="btn" id="memory">${item}</button>`).join('');
