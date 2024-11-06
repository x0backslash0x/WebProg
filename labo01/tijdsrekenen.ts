//tijdsrekenen.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 4

import * as readline from "readline-sync";

const input: number = readline.questionInt("Geef het aantal minuten in ");

let uren: number = Math.floor(input / 60);
let minuten: number = input - (uren * 60);

console.log(`Dit is ${uren} uur en ${minuten} minuten`);
