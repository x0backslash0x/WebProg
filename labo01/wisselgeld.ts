//wisselgeld.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 5

import * as readline from "readline-sync";

const BRIEFJE100: number = 100;
const BRIEFJE20: number = 20;
const MUNT2: number = 2;
const MUNT1: number = 1;

let bedrag = readline.questionFloat("Geef het bedrag in ");
let aantal_100: number = Math.floor(bedrag / BRIEFJE100);
if(aantal_100 > 0) {bedrag = bedrag - (aantal_100 * BRIEFJE100)};
let aantal_20: number = Math.floor(bedrag / BRIEFJE20);
if(aantal_20 > 0) {bedrag = bedrag - (aantal_20 * BRIEFJE20)};
let aantal_2: number = Math.floor(bedrag / MUNT2);
if(aantal_2 > 0) {bedrag = bedrag - (aantal_2 * MUNT2)};
let aantal_1: number = Math.floor(bedrag / MUNT1);

let message: string = `Dit is ${aantal_100} briefje van 100, ${aantal_20} briefje van 20, ${aantal_2} munt van 2 en ${aantal_1} munt van 1`;
console.log(message);
