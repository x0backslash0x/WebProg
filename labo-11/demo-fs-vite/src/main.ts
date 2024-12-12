import './style.css'

const formElement = document.querySelector("#myForm");
const formMessage = document.querySelector("#resoneMessage");

interface MyFormData {
  name: string;
  email: string;
}

formElement?.addEventListener("submit", async (event) => { // async kan ook gebruikt worden bij arrow functions
  event.preventDefault // default gedrag van submit tegenhouden en controle overnemen

/*   const form = event.target;
  const formData: = new MyFormData(form);
  const data: MyFormData = Object.fromEntries(formData.entries()); */

  const nameFormElement = document.querySelector("#name");
  const emailormElement = document.querySelector("#email");
  let data: MyFormData = {
    name = nameFormElement?.nodeValue;
    email = emailormElement?.nodeValue;
  }

  try {
    const response = await fetch("http://localhost:3000/sendData", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(data)

    const message = await response.text();
    formMessage?.textContent = message;
    });
  } catch (error) {
    console.log(error);
    formMessage?.textContent = "Er is een fout opgetreden";
  }



});