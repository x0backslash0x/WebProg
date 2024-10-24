/**
 * cat-gpt.ts
 * 
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 5 oefening 3 Cat GPT
 * 
 * ### OPGAVE ###
 * In deze oefening gaan we een command line applicatie schrijven die de website https://catgpt.wvd.io/ nabootst.
 * Deze website is een parodie op de zeer bekende chatgpt, alleen geeft hij geen antwoorden op je vragen, maar geeft hij een willekeurig aantal "Meow"s terug.
 * 
 * De applicatie werkt als volgt:
 * 1. Vraag via readline-sync input van de gebruiker aan de hand van een ">" prompt.
 * 2. Maak een functie aan "repeatWords" die een woord een aantal keer herhaalt en afprint. De functie heeft 3 parameters:
 *      word: het woord dat herhaald moet worden.
 *      times: het aantal keer dat het woord herhaald moet worden.
 *      delimiter: het teken dat gebruikt wordt om de woorden te scheiden.
 * 3. Gebruik de npm package "sloth-log" om een tekst vertraagd af te printen. Voor meer informatie bekijk de documentatie.
 * 4. Zorg ervoor dat elke sequentie van Meow's een willekeurig leesteken krijgt aan het einde (?,! en .).
 * 5. Zorg ervoor dat de gebruiker de applicatie kan afsluiten door "bye" in te geven. De kat zal nog een laatste keer een aantal "Meow"'s teruggeven
 */

import { randomInt } from "crypto";
import * as readline from "readline-sync";
const slothLog = require('sloth-log');
const endings: string = "?!.";
let ending: string;

/* herhaalt een woord een opgegeven aantal keren, gescheiden door een opgegeven teken en geeft dit terug als resultaat */
function repeatWords(word: string, times: number, delimiter: string): string {
    let message: string = "";
    for(let i: number = 0; i < times; i++) {
        message += (word + delimiter);
    }

    return message+word;
}

let input: string;
do {
    input = readline.question("> ");
    ending = endings[randomInt(3)]; //neemt willekeurig ?, ! of .
    slothLog.log(repeatWords("Meow", randomInt(8), " ") + ending);
} while (input != "bye");
