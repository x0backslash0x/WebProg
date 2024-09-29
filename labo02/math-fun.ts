/* som-van-getallen.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 1

   ### OPGAVE ###
   Schrijf de volgende functies:
   - add die twee getallen optelt
   - subtract die twee getallen van elkaar aftrekt
   - multiply die twee getallen met elkaar vermenigvuldigt. Zorg voor een default waarde van 1 als de tweede parameter niet meegegeven wordt.
   - divide die twee getallen deelt. Zorg voor een default waarde van 1 als de tweede parameter niet meegegeven wordt.
  Zorg dat je deze kan schrijven met het function keyword en met een arrow function.
  Gebruik deze functies om de volgende berekening uit te voeren:
  (4 + 5) * (6 - 3) / 2 = 13.5
  Print het resultaat van de berekening af.
*/

import * as readline from "readline-sync";

function add(a: number, b: number): number {
    return a + b;
}

function substract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    if(b == undefined) {
        return 1;
    } else {
        return a * b;
    }
}

function divide(a: number, b: number): number {
    if( b == undefined) {
        return 1;
    } else {
        return a / b;
    }
}

let result: number = divide(multiply(add(4, 5), substract(6, 3)), 2);
console.log(`(4 + 5) * (6 - 3) / 2 = ${result}`);
