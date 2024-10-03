class Planet {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    get name(): string { // dit is een property
        return this.#name;
    }

    set name(value: string) {
        if (value == this.#name) {
            console.log('je mag niet opnieuw dezelfde naam gebruiken')
        } else if (value == '') {
            console.log('je mag geen lege naam aan deze planeet geven.')
        } else {
            this.#name = value;
        }
    }

    displayName(): void { // dit is een functie/methode
        console.log(this.#name);
    }
}

let earth: Planet = new Planet('Aarde');
let mars: Planet = new Planet('Mars');

console.log(earth.name);
earth.displayName();



class Planet implements StellarObject{ // moet voldoen aan het contract van de interface
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    get name(): string { // dit is een property
        return this.#name;
    }

    set name(value: string) {
        if (value == this.#name) {
            console.log('je mag niet opnieuw dezelfde naam gebruiken')
        } else if (value == '') {
            console.log('je mag geen lege naam aan deze planeet geven.')
        } else {
            this.#name = value;
        }
    }

    displayName(): void { // dit is een functie/methode
        console.log(this.#name);
    }
}