/// <reference types="vite/client" />

import './style.css'

const button = document.querySelector("button");
const body = document.querySelector("body");

// return random number between 1 and 99
function generateNumber(): Number {
  let rand = Math.floor((Math.random() * 100));
  if(rand == 0) {rand = 1}

  return rand;
}

function createTable(): HTMLTableElement {
  const table = document.querySelector("table");

  if(table) {
    body?.removeChild(table);
  }

  const newtable = document.createElement("table");
  return newtable;
}

function populateTable(colls: number, rows: number, table: HTMLTableElement): HTMLTableElement {
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for(let i = 1; i < rows + 1; i++) {
    const row = document.createElement("tr");
    for(let i = 1; i < colls + 1; i++) {
      const cell = document.createElement("td");
      const rand = generateNumber();
      cell.appendChild(document.createTextNode(String(rand)));
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  table?.appendChild(tbody);
  return table;
}

button?.addEventListener("click", () => {
  const colls = Number(document.querySelector("#colls")?.value);
  const rows = Number(document.querySelector("#rows")?.value);

  const table = populateTable(colls, rows, createTable());
  body?.appendChild(table);

  const cells = document.querySelectorAll("td");
  for(let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if(Number(cell.textContent) > 10) {
      cell.classList.toggle('verkleurd');
    }
  }
})