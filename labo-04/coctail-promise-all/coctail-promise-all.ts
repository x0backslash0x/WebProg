//coctail-promise-all
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 4, oefening 2
//
// ### OPGAVE ###
//  Maak gebruik van Promise.all om de drie volgende cocktails via de cocktail api met de volgende ids in te lezen:
//  +11000, 11001, 11002
//
/// vervolgens de naam van de drie cocktails op het scherm te laten zien.
//
// URL van de coctail API
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000

/* momenteel geeft de functie slechts 1 coctail terug. We hebben er 3 nodig */

interface Data {
    drinks: Coctail[];
}

interface Coctail {
    strDrink: string;
}

async function fetchCoctail(id: number): Promise<Data> {
    const response: Response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
    return await response.json();
}

const coctail = fetchCoctail(11000).then((data: Data) => console.log(data.drinks[0].strDrink));
