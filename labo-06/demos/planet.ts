/* export class Planet {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }
} */

// de ongeschreven regel zegt dat een klasse de enige klasse in dat bestand is.
// bij export van een klasse mag je de naam niet weglaten
export default class Planet {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }
}