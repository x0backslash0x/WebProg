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
   * Vraag daarna aan de gebruiker welke pokemon er moet toegevoegd worden aan het team.
     Dit doe je aan de hand van de index van de pokemon. Dit doe je tot de gebruiker STOP ingeeft.
     Je kan dit doen aan de hand van een do-while loop.
   * Als de gebruiker een pokemon ingeeft die al in het team zet dan krijgt hij hiervan een melding en wordt de pokemon niet toegevoegd
   * Als de pokemon niet bekend is (dus het ingegeven nummer groter is dan de lengte van de array) wordt er ook een melding gegeven
   * Als je STOP hebt ingegeven dan wordt het team van de gebruiker op het scherm getoond

   ### WERKWIJZE ###
   1x lijst pokemon opbouwen
   2x pokemon lijst tonen aan gebruiker (dmv lus)
   3  vraag invoer om team aan te vullen
   4  team aanvullen
     uitzonderingen
     a  pokemon al in het team
     b  pokemon niet bekend
     c  gebruik voert STOP in

*/

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

for(let index: number = 0; index < pokemon.length; index++) {
    console.log(`${index}. ${pokemon[index]}`);
}
