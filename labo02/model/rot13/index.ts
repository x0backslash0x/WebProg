import * as readline from "readline-sync";


let arr: string[] = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let input: string = readline.question(`Geef een woord in : `);
let result: string = "";
for (let c of input) {
    let idx1: number = arr.indexOf(c);
    let idx2: number = (idx1 + 13) % 26;
    result = result + arr[idx2];
}

console.log(`De rot13 string is ${result}`);