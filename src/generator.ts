import type { PasswordOptions } from "./types.js";

export function generatePassword(currentOptions: PasswordOptions): string {
  let newPassword: string = "";
  let uppercaseCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let lowercaseCharacters = `abcdefghijklmnopqrstuvwxyz`;
  let symbols = `!@#$%^&*()_+{}:"><?/|~';`;
  let numbers = `0123456789`;
  let characterPool: string = "";

  if (currentOptions.includeUpperCase) {
    characterPool += uppercaseCharacters;
  }

  if (currentOptions.includeLowerCase) {
    characterPool += lowercaseCharacters;
  }

  if (currentOptions.includeNumbers) {
    characterPool += numbers;
  }

  if (currentOptions.includeSymbols) {
    characterPool += symbols;
  }

  for (let i = 0; i < currentOptions.length; i++) {
    newPassword +=
      characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return newPassword;
}
