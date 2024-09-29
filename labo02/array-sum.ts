/* array-sum.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 3

   ### OPGAVE ###
   Maak een nieuw project aan met de naam array-sum.
   Maak een nieuwe functie sum die de som van alle getallen in een array berekent.
   Gebruik hiervoor een for loop en probeer ook eens de reduce functie van een array.
   als je de volgende array meegeeft aan de functie:
   [1, 2, 3, 4, 5]
   
   dan moet de functie 15 teruggeven want 1 + 2 + 3 + 4 + 5 = 15.
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

function sum(array: number[]): number {
    let result: number = 0;

    for(let index: number = 0; index < getallen.length; index++) {
        result += getallen[index];
    }

    return result;
}

console.log(`de som van deze getallen is ${sum(getallen)}`);
