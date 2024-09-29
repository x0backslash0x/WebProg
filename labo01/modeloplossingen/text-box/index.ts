import * as readline from "readline-sync";

while (true) {
    let value: string = readline.question("Geef de tekst in:");
    if (value == "") {
        break;
    }

    value = "| " + value + " |";

    let headerAndFooter: string = "";

    for (let i: number = 0; i < value.length; i++) {
      if (i == 0 || i == value.length - 1) {
        headerAndFooter = headerAndFooter + "+";
      } else {
        headerAndFooter = headerAndFooter + "-";
      }
    }

    console.log(headerAndFooter);
    console.log(value);
    console.log(headerAndFooter);
}
