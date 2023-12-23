// розмітка кнопок з кнопками роботи з пам'ятью
import { memoryButtons} from "../helpers/date.js";
export const buttonsMemory:string=memoryButtons.map(item=>`<button class="btn" id="memory">${item}</button>`).join('');