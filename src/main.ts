import { generatePassword } from "./generator.js";
import { strengthChecking } from "./strength.js";
import type { PasswordOptions } from "./types.js";

console.log("Hello from the TypeScript kitchen!!!");

const passwordDisplayEl = document.querySelector(
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

const strengthLevelDisplayEl = document.querySelector(
  ".controls__strength-level",
)! as HTMLSpanElement;

const strengthDisplayBarsEl = document.querySelectorAll(
  ".controls__strength-bar",
) as NodeListOf<HTMLDivElement>;

const generatePasswordButtonEl = document.querySelector(
  "#generate-btn",
)! as HTMLButtonElement;

let passwordLevel: number = 0;

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

  const passwordGenerated = generatePassword(currentOptions);
  const passwordStrength = strengthChecking(currentOptions);

  if (passwordStrength === "TOO EASY") {
    passwordLevel = 0;
  }
  if (passwordStrength === "EASY") {
    passwordLevel = 1;
  }
  if (passwordStrength === "MEDIUM") {
    passwordLevel = 2;
  }
  if (passwordStrength === "HARD") {
    passwordLevel = 3;
  }

  const passwordLevelBars = passwordLevelDisplay(passwordLevel);

  passwordLevelBars;
  passwordDisplayEl.textContent = passwordGenerated;
  strengthLevelDisplayEl.textContent = passwordStrength;
});

function passwordLevelDisplay(passwordLevel: number): void {
  strengthDisplayBarsEl.forEach((strengthBar) => {
    strengthBar.classList.remove("strengthBackgroundColor");
  });
  for (let i = 0; i <= passwordLevel; i++) {
    strengthDisplayBarsEl[i]?.classList.add("strengthBackgroundColor");
  }
}
