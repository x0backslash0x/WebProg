import * as readline from "readline-sync";

let numbers: number = readline.questionInt("Hoeveel getallen wil je optellen?");
let arr: number[] = [];


for (let i: number = 0; i < numbers; i++) {
    let num: number = readline.questionInt(`Geef getal ${i + 1} in :`);
    arr.push(num);
}

let total1: number = 0;
for (let num of arr) {
    total1 = total1 + num;
}

console.log(`De som van de getallen via loop is ${total1}!`);

let total2: number = arr.reduce((acc:number, val:number) => acc + val);

console.log(`De som van de getallen via reduce is ${total2}!`);
