"use strict";

console.log(">> Ready :)");

const dateContent = document.querySelector(".title__days");
const divPage = document.querySelector(".page");

let arrTasks = [];

const arrMonths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

let date = new Date();
dateContent.innerHTML =
  date.getDate() +
  " de " +
  arrMonths[date.getMonth()] +
  " de " +
  date.getFullYear();

let button = document.getElementById("btn-add");

// esto es el modal que aparece cada vez que le doy al boton + = cada DIV
let modal = document.createElement("div");
modal.className = "modal";

// esto es el input que va dentro del modal =  dentro DIV
let inputModal = document.createElement("input");
inputModal.type = "text";
inputModal.value = "";
inputModal.name = "Add task";
inputModal.className = "modal__input";

// esto es el p que va dentro del modal TEXTO =  dentro DIV
let textModal = document.createElement("p");
let modalContent = document.createTextNode("Nueva Tarea");
modalContent.className = "modal__text";

textModal.appendChild(modalContent);

// esto es el botton de añadir que va dentro del modal =  dentro DIV
let btnModal = document.createElement("button");
btnModal.type = "button";
btnModal.value = "Añadir tarea";
btnModal.className = "modal__button";

textModal.appendChild(modalContent);

// añado el contenido boton, el texto y input al modal
modal.appendChild(textModal);
modal.appendChild(inputModal);
modal.appendChild(btnModal);

// console.log(modal);

// if (localStorage.getItem("info") !== null) {
//   const ls = localStorage.getItem("info");

// }

// const modalElement = document.querySelector(".modal");
function addModal() {
  divPage.appendChild(modal);
}

function addTask() {
  arrTasks.push({
    name: inputModal.value,
    checked: false
  });
  console.log(arrTasks);
  renderTask();
}

function renderTask() {
  let taskList = document.getElementById("ul-list");
  taskList.innerHTML = "";
  // esto es cada tarea = cada LI
  arrTasks.forEach(currentTask => {
    let task = document.createElement("li");
    task.className = "li__task";
    task.setAttribute("id", "li_input");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = currentTask.checked ? "checked" : "";
    checkbox.name = "name";
    checkbox.setAttribute("id", "input");
    checkbox.className = "input__task";

    task.appendChild(checkbox);
    task.appendChild(document.createTextNode(currentTask.name));
    taskList.appendChild(task);
    checkbox.addEventListener("click", getinputCheck);
  });

  // let archivo = document.getElementById("li_input").innerHTML;
  // localStorage.setItem("info", archivo);
  modal.remove();
}

function getinputCheck(event) {
  let checkboxes = document.querySelectorAll(".input__task");

  checkboxes.forEach((thisCheckBox, index) => {
    if (thisCheckBox.checked === true) {
      thisCheckBox.parentElement.classList.add("tachado-tarea");
    } else {
      thisCheckBox.parentElement.classList.remove("tachado-tarea");
    }
  });
}

button.addEventListener("click", addModal);
// inputModal.addEventListener("keyup", addTask);
btnModal.addEventListener("click", addTask);
