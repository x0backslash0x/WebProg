import * as readline from "readline-sync";

interface School {
  name: string;
}

async function runMe() {
    const countries: string[] = ["France", "Netherlands", "United Kingdom", "Belgium", "Luxembourg", "Ireland", "Spain", "Portugal"];
    const country: number = readline.keyInSelect(countries, "Which country would you like to list its colleges?");

    const response = await fetch(`http://universities.hipolabs.com/search?country=${countries[country]}`);
    const data: School[] = await response.json();

    for (const school of data) {
        console.log(school.name);
    }
}

runMe();
