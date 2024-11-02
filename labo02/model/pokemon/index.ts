import * as readline from "readline-sync";

let pokemon: string[] = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
];

let team: string[] = [];

for (let i = 0; i < pokemon.length; i++) {
    console.log(`${i}. ${pokemon[i]}`);
}

let input: string;
do {
    input = readline.question(`Welke pokemong wil je in je team? [0-20] : `);
    
    if (input == "STOP") {
        console.log("Jouw team van pokemon is:");
        for (let i = 0; i < team.length; i++) {
            console.log(`${i + 1}. ${team[i]}`);
        }
    } else {
        let idx: number = parseInt(input);
        if (idx < pokemon.length) {
            let poke: string = pokemon[idx];
            if (team.includes(poke)) {
                console.log("Deze pokemon zit al in je team.");
            } else {
                team.push(poke);
            }
        } else {
            console.log("Deze pokemon ken ik niet.");
        }
    }
} while (input != "STOP");