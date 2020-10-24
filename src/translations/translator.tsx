import { DE } from "./de"
import { EN } from "./en"

export function translate(number: number): string {
  if(sessionStorage.getItem("activeLanguage") === "de") {
    return DE[number]
  }
  else{
    return EN[number]
  }
}