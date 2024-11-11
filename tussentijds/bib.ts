//isaac.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// tussentijdse toest vraag 3

/**
 * Feedback na inzending:
 * 
 * class boeken correct, interface Boek was niet nodig voor deze opdracht (1)
 * encapsulatie correct (2)
 * geen module (0)
 * type correct (1)
 * user input niet afgewerkt
 * sortering eindresultaat niet afgewerkt
 */

import * as readline from 'readline-sync';

type soort = "ROMANCE" | "SCIENCE FICTION" | "DETECTIVE";

interface Boek {
    naam: string;
    autheur: string;
    soort: soort;
}

class boeken implements Boek {
    #naam: string;
    #autheur: string;
    #soort: soort;

    constructor(naam: string, autheur: string, soort: soort) {
        this.#naam = naam;
        this.#autheur = autheur;
        this.#soort = soort;
    }

    get naam(): string {
        return this.#naam;
    }

    get autheur(): string {
        return this.#autheur;
    }

    get soort(): soort {
        return this.#soort;
    }

    set naam(value: string) {
        this.naam = value;
    }

    set autheur(value: string) {
        this.#autheur = value;
    }

    set soort(value: soort) {
        this.#soort = value;
    }
    
}

let bibliotheek: boeken[] = [];
//let boekNaamInput: string = readline.question("Wat is de naam van het boek? ");
//let boekAuteurInput: string = readline.question("Wat is de auteur van het boek? ");
//let boekSoortInput: string = readline.question("Wat is de soort van het boek? (ROMANCE | SCIENCE FICTION | DETECTIVE) ");
/* if (boekSoortInput == 'ROMANCE' || boekSoortInput == 'SCIENCE FICTION' || boekSoortInput == 'DETECTIVE') {
    let boekSoort: soort = boekSoortInput;
    let boek1: boeken = new boeken(boekNaamInput, boekAuteurInput, boekSoort);
    console.log(`Titel: ${boek1.naam}, \nAuteur: ${boek1.autheur}, \nSoort: ${boek1.soort}`);
} else {
    console.log("verkeerde soort");
} */

bibliotheek.push(new boeken("mijn boek", "mezelf", "DETECTIVE"));
console.log(`Titel: ${bibliotheek[0].naam}, \nAuteur: ${bibliotheek[0].autheur}, \nSoort: ${bibliotheek[0].soort}`);