import * as readline from "readline-sync";

let next: boolean = true;

do {
    const email: string = readline.question("Geef het e-mail adres in:");

    let firstLetter: string = email.charAt(0).toUpperCase();
    let lastName: string =
        email.substr(email.indexOf(".") + 1, 1).toUpperCase() +
        email.substring(email.indexOf(".") + 2, email.indexOf("@"));

    console.log(`Je naam is ${firstLetter}. ${lastName}`);

    next = readline.keyInYNStrict("Wil je nog een e-mail adres ingeven?");
} while (next);

console.log("Nog een goede dag!");







