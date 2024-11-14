/// <reference types="vite/client" />

import './style.css'

const button = document.querySelector("button");
const body = document.querySelector("body");

button?.addEventListener("click", () => {
  const table = document.querySelector("table");

  if(table) {
    body?.removeChild(table);
  }

  const newtable = document.createElement("table");
  const tbody = document.createElement("tbody");
  newtable.appendChild(tbody);
  body?.appendChild(newtable);

  for(let i = 1; i < 5; i++) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.appendChild(document.createTextNode(String(i + 2 * 3)));
    cell2.appendChild(document.createTextNode(String(i + 3 * 3)));
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  
  const cells = document.querySelectorAll("td");
  for(let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if(Number(cell.textContent) > 10) {
      cell.classList.toggle('verkleurd');
    }
  }
})
