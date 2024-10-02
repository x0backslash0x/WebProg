/* puntenboek.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 4

   ### OPGAVE ###
   We willen een programma maken dat de punten van een aantal studenten bijhoudt.
   De gebruiker geeft de punten van de studenten op 20 in.
   Als de gebruiker geen punten meer wil ingeven dan geeft hij een lege string in.
   Het programma zal dan het gemiddelde van de punten tonen.
   Het geeft ook het aantal studenten dat een onvoldoende heeft (minder dan 10 punten).
*/

import * as readline from "readline-sync";

let i: number = 1;
let punten: number[] = [];
let punt: string;

function filterOnvoldoende(p: number) {
   if(p < 10) {
      return p;
   }
}

do {
   punt = readline.question(`Geef de punten van student ${i} in: `,);
   punten.push(Number(punt));

   i++;
} while(punt != "")

punten.pop();

const totaal = punten.reduce((accumulator: number, current: number) => {return accumulator + current;});
const onvoldoende: number[] = punten.filter(filterOnvoldoende);
console.log(`Het gemiddelde van de punten is ${totaal / punten.length}`);
console.log(`Er zijn ${onvoldoende.length} onvoldoendes`);
