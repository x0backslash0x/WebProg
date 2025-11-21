import './style.css'

interface Coctail {
  strDrink: string,
  strInstructions: string,
  strDrinkThumb: string;
}

async function readCoctails(): Promise<Coctail[]> {
  const response: Response = await fetch("")
}