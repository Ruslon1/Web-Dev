form = document.getElementById("todo-form");
input = document.getElementById("todo-input");
list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value.trim();

    if (task === "") {
        return;
    }

    addTask(task);
    input.value = "";
});

function addTask(task) {
    const listItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.classList.add("task-text");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    checkbox.addEventListener("change", function () {
        taskText.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "https://www.svgrepo.com/show/530501/delete.svg";
    deleteIcon.alt = "Delete";
    deleteIcon.width = 30;
    deleteIcon.height = 30;
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}