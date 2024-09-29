/* som-van-getallen.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 1

   ### OPGAVE ###
   We willen een programma maken dat de som van een aantal getallen berekent.
   De gebruiker zal eerst moeten ingeven hoeveel getallen hij wil optellen.
   Vervolgens zal hij de getallen moeten ingeven. Het programma zal dan de som van de getallen tonen.
   De getallen moeten opgeslagen worden in een array. Je mag een for loop gebruiken om de som te berekenen.
*/

import * as readline from "readline-sync";

let aantal = readline.questionInt("Hoeveel getallen wil je optellen? ")
let getallen: number[] = [];
let getal: number;
let index: number = 0;

do {
    index++;
    getal = readline.questionInt(`Geef getal ${index} in `);
    getallen.push(getal);
} while(index < aantal)

let som: number = 0;
for(let i: number = 0; i < getallen.length; i++) {
    som += getallen[i];;
}

console.log(`De som van de getallen is ${som}`);