/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 2 taken server
 */

interface intTaak {
    omschrijving: string;
    naam: string;
}

class Taak implements intTaak {
    omschrijving: string;
    naam: string;

    constructor(omschrijving: string, naam: string) {
        this.omschrijving = omschrijving;
        this.naam = naam;
    }
}
