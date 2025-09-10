import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges conditional class names and handles Tailwind's conflicting class utilities.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
