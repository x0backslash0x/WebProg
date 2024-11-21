//import './style.css'

interface Planet {
  name: string,
  moons: moon[];
}

interface moon {
  name: string;
}

function displayPlanet(planet: Planet): void {
  let div = document.createElement("div");
  let txt = document.createTextNode(planet.name);
  div.appendChild(txt);

  const body = document.querySelector("body");
  body?.appendChild(div);  
}


// ### JSON data ophalen met Fetch - voorbeeld 1 ###
async function readPlanets() {
  const response: Response = await fetch("https://theorie-webprogramming.surge.sh/planets.json");
  const planets: Planet[] = await response.json();
  
  planets.forEach((planet: Planet) => console.log(planet.name));
}
console.log("resultaat van readPlanets");
readPlanets();


// ### JSON data ophalen met Fetch - voorbeeld 2 ###
async function readPlanets2() {
  const response: Response = await fetch("https://theorie-webprogramming.surge.sh/planets.json");
  const planets: Planet[] = await response.json();
  
  planets.forEach((planet: Planet) => displayPlanet(planet));
}
console.log("\nresultaat van readPlanets2");
readPlanets2();


// ### JSON data ophalen met Fetch - voorbeeld 3 ###
// Promise opvangen met een await
async function readplanets3(): Promise<Planet[]> {
  const response: Response = await fetch("https://theorie-webprogramming.surge.sh/planets.json");
  return await response.json();
}

async function main() {
  let planets: Planet[] = await readplanets3();

  planets.forEach((planet: Planet) => displayPlanet(planet));
}
console.log("\nresultaat van readPlanets3 met Promise");
main();


// ### JSON data ophalen met Fetch - voorbeeld 4 ###
// Promise opvangen met then()
console.log("\nresultaat van readPlanets3 met then()");
readplanets3().then(planets => {
  planets.forEach((planet: Planet) => displayPlanet(planet));
});