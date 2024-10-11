class Planet {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        if (value == this.#name) {
            console.log("De naam mag niet dezelfde zijn");
        } else if (value == "") {
            console.log("je mag geen lege naam aan de planeet geven.");
        } else {
            this.#name = value;
        }
    }

    displayName(): void {
        console.log(this.#name);
    }
}

let earth: Planet = new Planet("Aarde");
let mars: Planet = new Planet("Mars");
console.log(earth.name);
earth.name = "";
earth.name = "Aarde";
earth.name = "Een andere naam voor de aarde";
earth.displayName();
