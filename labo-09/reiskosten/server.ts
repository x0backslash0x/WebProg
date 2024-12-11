//server.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 9 oefening 3 reiskosten server

import express, {Express, Request, Response} from "express";

class Reis {
    id: number;
    bestemming: string;
    jaar: number;
    kosten: Kost[];

    constructor(id: number, bestemming: string, jaar: number) {
        this.id = id;
        this.bestemming = bestemming;
        this.jaar = jaar;
        this.kosten = [];
    }

    toJSON() {
        return {
            "id": this.id,
            "bestemming": this.bestemming,
            "jaar": this.jaar,
            "kosten": this.kosten
        }
    }
}

class Kost {
    uitgave: string;
    prijs: number;

    constructor(uitgave: string, prijs: number)  {
        this.uitgave = uitgave;
        this.prijs = prijs;
    }

    toJSON() {
        return {
            "uitgave": this.uitgave,
            "prijs": this.prijs
        }
    }
}
