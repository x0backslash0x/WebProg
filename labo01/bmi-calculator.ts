//bmi-calculator.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 2

import * as readline from "readline-sync"

let gewicht = readline.questionFloat("Geef je gewicht in kg ");
let lengte  = readline.questionFloat("Geef je lenghte in m ");
let bmi: number;

bmi = gewicht / (lengte * 2)
console.log("Je BMI is " + bmi);
