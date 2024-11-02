import * as readline from "readline-sync";


let arr: number[] = [];

let input: string;
do {
    input = readline.question(`Geef de punten van student ${arr.length + 1} in : `);
    if (input != "") {
        arr.push(parseInt(input));
    }
} while (input != "");


let total: number = arr.reduce((acc: number, val: number) => acc + val);

console.log(`Het gemiddelde van de punten is ${total / arr.length}`);

let failed: number[] = arr.filter((p: number) => p < 10);

console.log(`Het aantal studenten met onvoldoende is ${failed.length}!`);
