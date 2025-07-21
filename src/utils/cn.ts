import clsx, { ClassValue } from "../../node_modules/clsx/clsx";
import { twMerge } from "../../node_modules/tailwind-merge/dist/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
