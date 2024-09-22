//name-from-email.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 6

import * as readline from "readline-sync";

let prompt: string = "Geef het email adres in: ";
let question: string = "Wil je nog een email adres ingeven? (y/n) ";

let email = readline.question(prompt);
let name: string = email.substring(0, 10);
let firstname: string = name[0].toUpperCase();
let lastname: string = "";

let message: string = `De naam is ${firstname}. ${lastname}`;
console.log(message);
