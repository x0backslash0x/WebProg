import * as readline from "readline-sync";

const value: number = readline.questionInt("Geef het bedrag in:");

let remainder: number = value;
let mod: number;

mod = remainder % 100;
let amount100: number = (remainder - mod) / 100;
remainder = mod;

mod = remainder % 20;
let amount20: number = (remainder - mod) / 20;
remainder = mod;

mod = remainder % 2;
let amount2: number = (remainder - mod) / 2;
remainder = mod;

console.log(`Dit is ${amount100} briefje van 100, ${amount20} briefje van 20, ${amount2} munt van 2 en ${remainder} munt van 1`);
