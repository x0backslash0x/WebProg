import * as readline from "readline-sync";
import * as sloth from "sloth-log";

async function repeatWords(word: string, times: number, delimiter: string) {
    let text: string = "";
    for (let i: number = 0; i < times; i++) {
        text = text + delimiter + word;
    }
    let random: number = Math.floor(Math.random() * 3);
    let signs: string[] = ["!", "?", "."];
    text = text + signs[random];
    await sloth.logAsync(text);
}

async function runMe() {
    let text: string = "";

    while (text != "bye") {
        text = readline.question(">");
        let random: number = Math.floor(Math.random() * 10) + 1;
        await repeatWords("Meow", random, " ");
    }
}

runMe();

