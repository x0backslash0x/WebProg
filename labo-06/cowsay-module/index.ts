//index.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 6 oefening 2 cowsay module
// dit bestand voerd de module uit

import * as readline from "readline-sync";
import cowsay from "./node_modules/cowsay";

const message: string = readline.question("wat zegt de koe? ");

function say(message: string) {
    if(message == "Meow!") {
        throw new Error(`koeien zeggen niet ${message}!`);
    }
    const result: string = cowsay.say({
        text: message,
        r: true,
        y: true
    });
    console.log(result);
}

say(message);
/* try {
    say("Meow!");
}
catch(error: Error) {
    console.log(error.message);
} */
