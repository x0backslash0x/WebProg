import * as readline from "readline-sync";

async function runMe() {
    let timestamp: number = readline.questionInt("Geef een unix timestamp in aub vb. 1549892280: ");

    const response = await fetch(`https://helloacm.com/api/unix-timestamp-converter/?cached&s=${timestamp}`);
    const data: string = await response.text();
    console.log("De unix timestamp " + timestamp + " omgezet naar ons tijdsformaat is gelijk aan " + data);
}

runMe();