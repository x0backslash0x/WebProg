type Brandstof = "BENZINE" | "ELEKTRISCH" | "GEEN";

class Voertuig {
  #naam: string;
  #brandstof: Brandstof;
  #rijdenOp: string;

  constructor(naam: string, brandstof: Brandstof, rijdenOp: string) {
    this.#naam = naam;
    this.#brandstof = brandstof;
    this.#rijdenOp = rijdenOp;
  }

  rijden(): void {
    console.log(`${this.#naam} rijdt op ${this.#rijdenOp} met brandstof ${this.#brandstof}`);
  }
}

class Auto extends Voertuig {
  constructor(naam: string, brandstof: Brandstof) {
    super(naam, brandstof, "de weg");
  }
}

class Fiets extends Voertuig {
  constructor(naam: string, brandstof: Brandstof) {
    super(naam, brandstof, "het fietspad");
  }
}

let bmw: Auto = new Auto("bmw", "BENZINE");
let tesla: Auto = new Auto("tesla", "ELEKTRISCH");
let koersfiets: Fiets = new Fiets("koersfiets", "GEEN");
let speedelec: Fiets = new Fiets("speedelec", "ELEKTRISCH");

bmw.rijden();
tesla.rijden();
koersfiets.rijden();
speedelec.rijden();