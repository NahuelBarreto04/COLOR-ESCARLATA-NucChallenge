const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const form = document.getElementById("Form");
const mensagge = document.getElementById("congratulations");

let Personas = class {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
};
let arrPersonas = [];
let NewAndPush = (name, email) => {
  return arrPersonas.push(new Personas(name, email));
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userName.value === "" || userEmail.value === "") {
    alert("Please enter a username or valid email");
    return;
  } else {
    NewAndPush(userName.value, userEmail.value);
  }
  mensagge.textContent = "La informacion fue enviada 😎";
  form.reset(userName);
  consoleUser(arrPersonas);
});

let consoleUser = (array) => {
  let lastItem = array[array.length - 1];
  setTimeout(() => {
    console.log(
      `Usted ingresó:\nNombre:${lastItem.name}\nEmail:${lastItem.email} `
    );
    mensagge.textContent = "";
  }, 2000);
};
