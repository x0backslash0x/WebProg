/// <reference types="vite/client" />

import './style.css'

const button = document.querySelector("button");

button?.addEventListener("click", () => {
  const cells = document.querySelectorAll("td");
  for(let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if(Number(cell.textContent) > 10) {
      cell.classList.toggle('verkleurd');
    }
  }
})

/* 
const tbody = document.querySelector("tbody");

for(let i = 1; i < 5; i++) {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  cell1.appendChild(document.createTextNode(String((Math.random() * 2))));
  cell2.appendChild(document.createTextNode(String(i * 3)));
  row.appendChild(cell1);
  row.appendChild(cell2);
  tbody?.appendChild(row);
}

button?.addEventListener("click", () => {
  const cells = document.querySelectorAll("td");
  for(let i = 0; i < cells.length; i++) {
    console.log(cells[i].textContent);
  }
  //console.log(cells[0].textContent);
}) */
