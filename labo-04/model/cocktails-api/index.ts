import * as readline from "readline-sync";

interface Data {
    drinks: Cocktail[];
}

interface Cocktail {
    strDrink: string;
}

console.log("-------------------------------------------");
console.log("| Welcome to the cocktail lookup service. |");
console.log("-------------------------------------------");

async function runMe() {
    let ingredient: string = readline.question("Please provide an ingredient: ");

    while (ingredient != "") {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`);
        const data: Data = await response.json();
        for (const cocktail of data.drinks) {
            console.log(cocktail.strDrink);
        }
        ingredient = readline.question("Please provide an ingredient: ");
    }
}

runMe();