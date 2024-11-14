/// <reference types="vite/client" />

import './style.css'

const button = document.querySelector("button");
const body = document.querySelector("body");

function createTable(colls: number): HTMLTableElement | undefined {
  const table = document.querySelector("table");

  if(table) {
    body?.removeChild(table);
  }

  const newtable = document.createElement("table");
  const tbody = document.createElement("tbody");
  newtable.appendChild(tbody);

  for(let i = 1; i < 5; i++) {
    const row = document.createElement("tr");
    for(let i = 1; i < colls + 1; i++) {
      const cell = document.createElement("td");
      const rand = Math.floor((Math.random() * 100));
      cell.appendChild(document.createTextNode(String(rand)));
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  return newtable;
}

button?.addEventListener("click", () => {
  const colls = document.querySelector("input")?.value;

  const table = createTable(Number(colls));
  body?.appendChild(table);

  const cells = document.querySelectorAll("td");
  for(let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if(Number(cell.textContent) > 10) {
      cell.classList.toggle('verkleurd');
    }
  }
})