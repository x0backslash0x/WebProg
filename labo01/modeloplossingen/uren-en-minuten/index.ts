import * as readline from "readline-sync";

const value: number = readline.questionInt("Geef het aantal minuten in:");

let minutes: number = value % 60;
let hours: number = (value - minutes) / 60;

console.log(`Dit is ${hours} uur en ${minutes} minuten`);
