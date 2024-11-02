import * as cowsay from "cowsay";
import * as readline from "readline-sync";

function say(message: string): void {
    if (message == "Meow") {
        console.log("Cows don't say Meow");
    } else {
        console.log(cowsay.say({ text: message }));
    }

}

let text: string = readline.question("What should the cow say?");

while (text != "exit") {
    say(text);
    text = readline.question("What should the cow say?");
}

