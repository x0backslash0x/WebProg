import * as readline from "readline-sync";

let weight: number = readline.questionInt("Geef je gewicht in (in kg):");
let height: number = readline.questionFloat("Geef je lengte in (in m):");

let bmi: number = Math.round((weight / (height * height)) * 100) / 100;

console.log(`Je BMI is ${bmi}!`);
