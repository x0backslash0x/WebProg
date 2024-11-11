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

type soort = "ROMANCE | SCIENCE FICTION | DETECTIVE";

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

let input: string = "";
do (input = readline.question("Wil je een boek ingeven? (exit om te stoppn) ")) {
    

} while (input != "exit")
