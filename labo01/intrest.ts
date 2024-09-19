//intrest.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 3

import * as readline from "readline-sync"

let kapitaal : readline.quest("Geef het bedrag in ");
let intrest  : readline.questionFloat("Geef het intrest percentage in ");

let jaar1 : number = kapitaal + (kapitaal * (intrest / 100));
let jaar2 : number = jaar1 + (jaar1 * (intrest / 100));
let jaar3 : number = jaar2 + (jaar2 * (intrest / 100));

console.log("Na 1 jaar heb je " + jaar1);
console.log("Na 2 jaar heb je " + jaar2);
console.log("Na 3 jaar heb je " + jaar3);
