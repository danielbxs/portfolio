import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { formspreeEndpoint, FormValues } from "../src/data/portfolio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function sendToFormspree(data: FormValues & { "g-recaptcha-response": string }) {
  return fetch(formspreeEndpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
