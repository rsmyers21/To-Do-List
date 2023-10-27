const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

function createTask() {
    if (inputField.value === '') {
        alert("Text box cannot be empty");
    }

    else {
       // let li = document.createElement("li");
        //li.innerHTML = inputField.value;
       // listContainer.appendChild(li);

        const taskElement = document.createElement("div");
        taskElement.classList.add("task")

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content");
        taskContentElement.innerText = inputField.value;

        taskElement.appendChild(taskContentElement);

        listContainer.appendChild(taskElement);
    }

}