//hello.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 demo readline-sync

import * as readline from "readline-sync"

let name : string = readline.question("Wat is je naam?");
console.log("Hallo " + name);
