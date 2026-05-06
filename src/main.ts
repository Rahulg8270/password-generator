import { generatePassword } from "./generator.js";
import type { PasswordOptions } from "./types.js";

console.log("Hello from the TypeScript kitchen!!!");

const passwordDisplayText = document.querySelector(
  "#password-display",
)! as HTMLHeadingElement;

const copyButtonElement = document.querySelector(
  "#copy-btn",
)! as HTMLButtonElement;

const lengthSliderElement = document.querySelector(
  "#length-slider",
)! as HTMLInputElement;
const lengthDisplayText = document.querySelector(
  "#length-display",
)! as HTMLSpanElement;
const uppercaseInputCheckbox = document.querySelector(
  "#uppercase",
)! as HTMLInputElement;
const lowercaseInputCheckbox = document.querySelector(
  "#lowercase",
)! as HTMLInputElement;
const numberInputCheckbox = document.querySelector(
  "#numbers",
)! as HTMLInputElement;

const symbolInputCheckbox = document.querySelector(
  "#symbols",
)! as HTMLInputElement;

const generatePasswordButtonEl = document.querySelector(
  "#generate-btn",
)! as HTMLButtonElement;

passwordDisplayText.textContent = "rkjenfke";

lengthSliderElement.addEventListener("change", () => {
  lengthDisplayText.textContent = lengthSliderElement.value;
});

generatePasswordButtonEl.addEventListener("click", () => {
  const currentOptions: PasswordOptions = {
    length: parseInt(lengthSliderElement.value, 10),
    includeUpperCase: uppercaseInputCheckbox.checked,
    includeLowerCase: lowercaseInputCheckbox.checked,
    includeNumbers: numberInputCheckbox.checked,
    includeSymbols: symbolInputCheckbox.checked,
  };

  const newPassword = generatePassword(currentOptions);

  passwordDisplayText.textContent = newPassword;
});
