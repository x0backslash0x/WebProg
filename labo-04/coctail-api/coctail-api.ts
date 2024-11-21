//coctail-api.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 4, oefening 7

import * as readline from "readline-sync";

interface Data {
    drinks: Cocktail[];
}

interface Cocktail {
    strDrink: string;
}

// oplossing deels afgekeken van de modeloplossing
console.log("-------------------------------------------");
console.log("| Welcome to the cocktail lookup service. |");
console.log("-------------------------------------------");
async function fetchCoctail() {
    let ingredient: string;
    ingredient= readline.question("Please provide an ingredient: ");
    while(ingredient != "") {
        const response: Response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ingredient);
        const data: Data = await response.json();

        data.drinks.forEach((coctail: Cocktail) => console.log("- " + coctail.strDrink));
        ingredient= readline.question("Please provide an ingredient: ");
    }
}
fetchCoctail();