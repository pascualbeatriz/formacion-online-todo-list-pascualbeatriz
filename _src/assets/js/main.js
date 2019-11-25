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

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = "value";
  checkbox.name = "name";
  checkbox.id = "id";

  task.appendChild(checkbox);
  let text = "Task: ";
  task.appendChild(document.createTextNode(text));
  taskList.appendChild(task);

  checkbox.addEventListener("click", getinputCheck);
  // arrTasks.push({
  //   task,
  //   checked: false
  // });

  for (const item of checkbox) {
    item.addEventListener("click", getinputCheck);
  }
}

function getinputCheck(event) {
  let valuecheck = event.currentTarget.value;
  console.log(valuecheck);
}

button.addEventListener("click", addTask);
