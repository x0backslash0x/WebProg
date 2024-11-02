import * as readline from "readline-sync";

interface Categories {
    categories: string[];
}

async function runMe() {
    const response = await fetch(`https://v2.jokeapi.dev/categories`);
    const data: Categories = await response.json();

    const types: string[] = ["singe", "twopart"];

    const category: number = readline.keyInSelect(data.categories, "What category of joke you want to see?");
    const type:number = readline.keyInSelect(types, "What type of joke you want to see?")

    const jokeResponse = await fetch(`https://v2.jokeapi.dev/joke/${data.categories[category]}/?type=${types[type]}`);
    const joke: string = await jokeResponse.text();

    console.log(joke);
}

runMe();
