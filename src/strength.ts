import type { PasswordOptions } from "./types.js";

export function strengthChecking(optionsSelected: PasswordOptions): string {
  if (optionsSelected.length <= 8) {
    return `TOO EASY`;
  }
  if (optionsSelected.length > 8 && optionsSelected.length <= 10) {
    return `EASY`;
  }
  if (optionsSelected.length > 10 && optionsSelected.length <= 15) {
    return `MEDIUM`;
  }
  return `HARD`;
}
