/* transportmiddelen.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 3 oefening 2

   ### WERKWIJZE ###
   1x interface
   2x classes - 1 testinstantie elks
   3  rijden() method
   4  bijkomende instanties
*/

type Brandstof  = "BENZINE" | "ELECTRISCH" | "GEEN";

interface Voertuig {
    naam: string;
    brandstof: Brandstof;
    rijden();
}

class Auto {
    #naam: string;
    #brandstof: Brandstof;

    constructor(naam: string, brandstof: Brandstof) {
        this.#naam = naam;
        this.#brandstof = brandstof;
    }
}

class Fiets {
    #naam: string;
    #brandstof: Brandstof;

    constructor(naam: string, brandstof: Brandstof) {
        this.#naam = naam;
        this.#brandstof = brandstof;
    }
}

let auto: Auto = new Auto('auto', 'BENZINE');
let fiets: Fiets = new Fiets("fiets", "GEEN")

// fout: property 'naam' bestaat niet  op type Auto
console.log(auto.naam + 'rijd op de weg met ' + auto.brandstof + ' als brandstof');
console.log(fiets.naam + 'rijdt op het fietspad met ' + fiets.brandstof + ' als brandstof');