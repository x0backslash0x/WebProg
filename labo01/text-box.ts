//text-box.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 7

import * as readline from "readline-sync";

let prompt: string = "Geef de tekst in: ";
let goodbye: string = "Tot ziens!";
let message;
const corner: string = "+";
const spacer: string = "-";
const edge: string = "|";
let border: string;

do {
    message = readline.question(prompt);
    if(message == "") {break};
    
    border = corner;
    for(let index:number = 0; index < (message.length)+2; index++) {border = border + spacer}
    border = border + corner;

    console.log(border);
    console.log(edge + ' ' + message + ' ' + edge);
    console.log(border);
} while(message != "")
console.log(goodbye);