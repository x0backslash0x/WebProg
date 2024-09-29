import * as readline from "readline-sync";

const amount: number = readline.questionInt("Geef het bedrag in:");
const interest: number = readline.questionInt("Geef het bedrag percentage in:");

let total: number = amount;

for (let i: number = 0; i < 5; i++) {
    total = total * (1 + (interest / 100));

    let rounded: number = Math.round(total * 100) / 100;
    switch (i) {
        case 0:
            console.log(`Na 1 jaar heb je ${rounded}`);
            break;
        case 1:
            console.log(`Na 2 jaar heb je ${rounded}`);
            break;
        case 4:
            console.log(`Na 5 jaar heb je ${rounded}`);
            break;
    }
}
