//tijdsrekenen.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 4

import * as readline from "readline-sync";

let minuten = readline.questionInt("Geef het aantal minuten in ");
let aantal_minuten: number = 0;
let aantal_uren: number = 0;

if(minuten > 60) {
    aantal_uren = Math.floor(minuten / 60);
    aantal_minuten = minuten - (aantal_uren * 60);
} else {
    aantal_minuten = minuten;
}

let message: string = `Dit is ${aantal_uren} uur en ${aantal_minuten} minuten`;
console.log(message);
