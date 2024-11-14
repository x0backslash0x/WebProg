const button = document.querySelector('button');
const div = document.querySelector('div');

button?.addEventListener("click", () => {
  let nieuweTekst: string;
  if (div?.innerText == "aangepaste tekst") {
    nieuweTekst = "oorspronkelijke tekst"
  } else {
    nieuweTekst = "aangepaste tekst"
  }

  div.innerHTML = nieuweTekst;
})
