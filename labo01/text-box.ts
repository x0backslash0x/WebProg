//text-box.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 1 oefening 7

import * as readline from "readline-sync";

let input: string = "";

do {
    input = readline.question("Geef de tekst in: ")
    if(input == "") {break;}

    input = "| " + input + " |";
    
    let line: string = "";
    for(let i = 0; i < input.length - 2; i++) {line += "-"}
    line = "+" + line + "+";

    console.log(line);
    console.log(input);
    console.log(line);
} while(input != "")

console.log("Tot ziens!")
