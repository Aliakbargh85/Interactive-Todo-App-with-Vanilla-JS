let $ = document;

let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");

function addNewTodoItem(todoText) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = todoText;

  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";

  newTodoTrash.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

inputElem.addEventListener("keydown", function (e) {
  let inputValue = e.target.value.trim();

  if (e.key === "Enter") {
    if (inputValue !== "") {
      inputElem.value = "";
      addNewTodoItem(inputValue);
    } else {
      alert("کادر را پر کنید");
    }
  }
});
