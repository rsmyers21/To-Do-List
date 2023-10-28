const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

function createTask() {
    if (inputField.value === '') {
        alert("Text box cannot be empty");
    }

    else {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task")

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content");

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "text";
        taskInputElement.value = inputField.value;
        taskInputElement.setAttribute("readonly", "readonly");

        taskContentElement.appendChild(taskInputElement);

        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("edit")
        taskEditElement.innerHTML = "Edit";

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("delete");
        taskDeleteElement.innerHTML = "Delete";

        taskElement.appendChild(taskEditElement);
        taskElement.appendChild(taskDeleteElement);

        listContainer.appendChild(taskElement);

        inputField.value = "";

        taskEditElement.addEventListener("click", () => {
            if (taskEditElement.innerText.toLowerCase() == "edit") {
            taskInputElement.removeAttribute("readonly");
            taskInputElement.focus();
            taskEditElement.innerText = "Save";
            }
            else {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerText = "Edit";
            }
        } );
    }

}