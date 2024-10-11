/* transportmiddelen.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 3 oefening 2

   ### WERKWIJZE ###
   1x interface
   2x classes - 1 testinstantie elks
   3x rijden() method
   4x bijkomende instanties
*/

type Brandstof  = "BENZINE" | "ELECTRISCH" | "GEEN";

interface Voertuig {
    naam: string;
    brandstof: Brandstof;
    rijden(): void;
}

class Auto implements Voertuig {
    naam: string;
    brandstof: Brandstof;

    constructor(naam: string, brandstof: Brandstof) {
        this.naam = naam;
        this.brandstof = brandstof;
    }

    rijden(): void {
        console.log(`${this.naam} rijdt op de weg met brandstof ${this.brandstof}`);
    }
}

class Fiets implements Voertuig {
    naam: string;
    brandstof: Brandstof;

    constructor(naam: string, brandstof: Brandstof) {
        this.naam = naam;
        this.brandstof = brandstof;
    }

    rijden(): void {
        console.log(`${this.naam} rijdt op het fietspad met brandstof ${this.brandstof}`);
    }
}

let auto1: Auto = new Auto("opel corsa", "BENZINE");
let auto2: Auto = new Auto("Tesla", "ELECTRISCH");
let fiets1: Fiets = new Fiets("Merida", "GEEN");
let fiets2: Fiets = new Fiets("Merckx", "GEEN");
console.log(auto1.naam);
auto1.rijden();
console.log(auto2.naam);
auto2.rijden();
console.log(fiets1.naam);
fiets1.rijden();
console.log(fiets2.naam);
fiets2.rijden();
