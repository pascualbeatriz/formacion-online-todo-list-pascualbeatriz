"use strict";

console.log(">> Ready :)");

const dateContent = document.querySelector(".title__days");

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

function addTask() {
  let taskList = document.getElementById("ul-list");

  let task = document.createElement("li");
  task.className = "li__task";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = "value";
  checkbox.name = "name";
  checkbox.id = "id";
  checkbox.className = "input__task";

  task.appendChild(checkbox);
  let text = "Task: ";
  task.appendChild(document.createTextNode(text));
  taskList.appendChild(task);

  checkbox.addEventListener("click", getinputCheck);

  // arrTasks.push({
  //   task,
  //   checked: false
  // });
}

function getinputCheck(event) {
  let checkboxes = document.querySelectorAll(".input__task");
  // let task = document.querySelector(".li__task");

  checkboxes.forEach((thisCheckBox, index) => {
    if (thisCheckBox.checked === true) {
      thisCheckBox.parentElement.classList.add("tachado-tarea");
    } else {
      thisCheckBox.parentElement.classList.remove("tachado-tarea");
    }
  });
}

button.addEventListener("click", addTask);
