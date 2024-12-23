interface intTaak {
    prioriteit: number;
    omschrijving: string;
    naam: string;
}

export class Taak implements intTaak {
    #prioriteit: number;
    #omschrijving: string;
    #naam: string;

    constructor(prioriteit: number, omschrijving: string, naam: string) {
        this.#prioriteit = prioriteit;
        this.#omschrijving = omschrijving;
        this.#naam = naam;
    }

    get prioriteit() {
        return this.#prioriteit;
    }

    set prioriteit(value: number) {
        this.#prioriteit = value;
    }

    get omschrijving() {
        return this.#omschrijving;
    }

    set omschrijving(value: string) {
        this.#omschrijving = value;
    }

    get naam() {
        return this.#naam;
    }

    set naam(value: string) {
        this.#naam = value;
    }
}
