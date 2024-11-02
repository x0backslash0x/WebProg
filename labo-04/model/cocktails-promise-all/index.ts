interface Data {
  drinks: Cocktail[];
}

interface Cocktail {
  strDrink: string;
}

function fetchAllCocktails() {
  Promise.all(
    [
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000"),
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001"),
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002")
    ])
    .then((responses) => {
      for (const response of responses) {
        response.json().then((data: Data) => console.log(data.drinks[0].strDrink))
      }
  })
}

fetchAllCocktails();