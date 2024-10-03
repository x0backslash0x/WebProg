/* pokemon.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 2 oefening 6

   ### OPGAVE ###
   * Gegeven is de volgende array van 20 pokemon:
   * Maak een variabele team van het type string[].
     Deze array bevat de pokemon van de gebruiker van het programma.
   * Gebruik een lus om de pokemon te tonen aan de gebruiker.
     Toon eerst de index gevolgd door de naam van de pokemon.
     Je gebruikt dus nog NIET de ingebouwde keyInSelect van de readline-sync library.
     --0. Bulbasaur
   * Vraag daarna aan de gebruiker welke pokemon er moet toegevoegd worden aan het team.
     Dit doe je aan de hand van de index van de pokemon. Dit doe je tot de gebruiker STOP ingeeft.
     Je kan dit doen aan de hand van een do-while loop.
     --Welke pokemon wil je in je team? [0-20]: 4
   * Als de gebruiker een pokemon ingeeft die al in het team zet dan krijgt hij hiervan een melding en wordt de pokemon niet toegevoegd
   * Als de pokemon niet bekend is (dus het ingegeven nummer groter is dan de lengte van de array) wordt er ook een melding gegeven
   * Als je STOP hebt ingegeven dan wordt het team van de gebruiker op het scherm getoond

   ### WERKWIJZE ###
   1x lijst pokemon opbouwen
   2x pokemon lijst tonen aan gebruiker (dmv lus)
   3x vraag invoer om team aan te vullen
   4x team aanvullen
     uitzonderingen
     ax pokemon al in het team (Deze pokemon zit al in je team)
     bx pokemon niet bekend (Deze pokemon ken ik niet)
     cx gebruiker voert STOP in (toon team)
        --Jouw team van pokemon is: werk

*/
import * as readline from "readline-sync";

const bericht_team: string = "Jouw team van pokemon is:"

function toonPokemon(lijst: string[]): string {
    let lijst_van_pokemon: string = "";

    for(let index: number = 0; index < lijst.length; index++) {
        lijst_van_pokemon += (`${index+1}. ${lijst[index]}\n`);
    }

    return lijst_van_pokemon;
}

let team: string[] = [];
function teamAanvullen(teamlid_id: number): number | undefined {
  let nieuw_lid = pokemon[teamlid_id];
  if(!pokemon.includes(nieuw_lid)) { // pokemon niet bekend (1)
    return 1;
  } else if(team.includes(nieuw_lid)) { // pokemon al in het team (2)
    return 2;
  }

  team.push(nieuw_lid);
}

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

console.log(toonPokemon(pokemon));

let nieuw_lid: string = "";
do {
    nieuw_lid = readline.question("Welke pokemon wil je in je team? [0-20]: ");

    if(nieuw_lid != "STOP") {
        let result: number | undefined = teamAanvullen(Number(nieuw_lid));
        if(result == 1) {
          console.log("pokemon is niet bekend");
        } else if(result == 2) {
          console.log("pokemon al in het team");
        }
    }
} while(nieuw_lid != "STOP")

console.log(bericht_team);
console.log(toonPokemon(team));
