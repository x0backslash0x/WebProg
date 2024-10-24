//index.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 6 oefening 2 cowsay module
// dit bestand voerd de module uit

import cowsay from "./node_modules/cowsay";

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

say("Meow!");
