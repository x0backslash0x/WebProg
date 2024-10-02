/* rot13.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 5

   ### OPGAVE ###
   We willen een programma maken dat een string encodeert met de rot13 methode.
   De rot13 methode is een simpele methode om een string te coderen.
   Elke letter wordt vervangen door de letter die 13 plaatsen verder in het alfabet staat.
   Als je aan het einde van het alfabet komt dan ga je terug naar het begin.
   
   De gebruiker geeft een string in en het programma toont de gecodeerde string.

   ### WERKWIJZE ###
   De werkwijze is als volgt:
    x1 Je begint met een array van het alfabet in kleine letters.
    x2 Je vraagt de gebruiker om een string in te geven.
    x3 Je gaat door elke letter van de string en je zoekt de index van de letter in de array van het alfabet.
    x4 Je telt 13 op bij de index en je neemt de modulo van 26. Dit is de nieuwe index van de letter.
    x5 Je neemt de letter op de nieuwe index en je voegt deze toe aan een nieuwe string.
    x6 Als de letter een spatie is of een ander teken dan een letter dan voeg je deze ook toe aan de nieuwe string. 
       Je moet dus controleren of de letter in de array van het alfabet staat.
*/

import * as readline from "readline-sync";

let char: string;
let index: number;
let newindex: number;
let rot13string: string = "";

const alfabet: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function rot13 (line: string): string {
    for(let i: number = 0; i < line.length; i++) {
        char = line[i];
        index = alfabet.indexOf(char);
        newindex = (index + 13) % 26;
        if(index == -1) {
            rot13string += char;
        } else {
            rot13string += alfabet[newindex];
        }
    }

    return rot13string;
}

let line: string = readline.question("Enter a string: ")
console.log(rot13(line));
