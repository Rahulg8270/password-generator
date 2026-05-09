import type { PasswordOptions } from "./types.js";

export function strengthChecking(optionsSelected: PasswordOptions): string {
  let varietyScore = 0;

  if (optionsSelected.includeLowerCase) {
    varietyScore += 1;
  }
  if (optionsSelected.includeUpperCase) {
    varietyScore += 1;
  }
  if (optionsSelected.includeNumbers) {
    varietyScore += 1;
  }
  if (optionsSelected.includeSymbols) {
    varietyScore += 1;
  }

  if (optionsSelected.length > 15 && varietyScore === 4) {
    return `HARD`;
  }
  if (optionsSelected.length <= 8 || varietyScore <= 1) {
    return `TOO EASY`;
  }
  if (optionsSelected.length <= 11 || varietyScore <= 2) {
    return `EASY`;
  }
  return `MEDIUM`;
}
