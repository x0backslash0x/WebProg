import './style.css'

const style: string = "verkleurd";
const button = document.querySelector("button");
const div1 = document.querySelector("#box1");
const div2 = document.querySelector("#box2");
const div3 = document.querySelector("#box3");
button?.classList.add("1");
div1?.classList.add("verkleurd");

button?.addEventListener("click", () => {
  switch(button.classList.value) {
    case "1":
      div1?.classList.remove(style);
      div2?.classList.add(style);
      button.classList.remove("1");
      button.classList.add("2");
      break;
    case "2":
      div2?.classList.remove(style);
      div3?.classList.add(style);
      button.classList.remove("2");
      button.classList.add("3");
      break;
    case "3":
      div3?.classList.remove(style);
      div1?.classList.add(style);
      button.classList.remove("3");
      button.classList.add("1");
      break;
  }
})
