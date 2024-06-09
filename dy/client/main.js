


function getNewTodoItem(name) {
    let newTodoItem = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newTodoItem.classList.add("completed");
        } else {
            newTodoItem.classList.remove("completed");
        }
    });
    checkbox.classList.add('toggle');
    newTodoItem.appendChild(checkbox);

    let label = document.createElement("label");
    label.textContent = name;
    label.setAttribute('for', 'toggle')
    newTodoItem.appendChild(label);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("destroy");
    newTodoItem.appendChild(deleteBtn);

    return newTodoItem;
}

const newTodoEl = document.querySelector('.new-todo');
const todoListEl = document.querySelector('.todo-list');
newTodoEl.addEventListener('change', function(event) {
    let newItemContent = getNewTodoItem(event.target.value);
    todoListEl.appendChild(newItemContent);
    newTodoEl.value = "";
});