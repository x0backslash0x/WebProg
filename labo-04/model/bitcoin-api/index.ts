import * as readline from "readline-sync";

interface Data {
    bpi: Bpi;
}

interface Bpi {
    USD: Price;
    GBP: Price;
    EUR: Price;
}

interface Price {
    rate_float: number;
}

const valuta: string[] = ["EUR", "USD", "GBP"];

async function getPrice(index: number): Promise<void> {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data:Data = await response.json();

    switch (index) {
        case 0:
            console.log("De huidige prijs van bitcoin is " + data.bpi.EUR.rate_float + " EUR");
            break;
        case 1:
            console.log("De huidige prijs van bitcoin is " + data.bpi.USD.rate_float + " USD");
            break;
        case 2:
            console.log("De huidige prijs van bitcoin is " + data.bpi.GBP.rate_float + " GBP");
            break;
        default:
            console.log("Deze valuta wordt niet ondersteund");
        
    }
}

const index: number = readline.keyInSelect(valuta, "Welke valuta wil je zien?");

getPrice(index);
