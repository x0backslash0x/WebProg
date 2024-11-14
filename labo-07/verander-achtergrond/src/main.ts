import './style.css'

const button = document.querySelector('button');
const div = document.querySelector('div');

button?.addEventListener("click", () => {
  div?.classList.toggle("verkleurd");
})
