document.addEventListener('DOMContentLoaded', (event) => {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const todoText = todoInput.value.trim();

            if (todoText !== '') {
                const todoItem = document.createElement('li');
                todoItem.className = 'todo-item';
                
                const todoTextSpan = document.createElement('span');
                todoTextSpan.textContent = todoText;
                
                const buttonsDiv = document.createElement('div');
                buttonsDiv.className = 'todo-buttons';
                
                const completeButton = document.createElement('button');
                completeButton.textContent = '완료';
                completeButton.className = 'complete-button';
                completeButton.addEventListener('click', () => {
                    todoItem.classList.toggle('completed');
                });

                const deleteButton = document.createElement('button');
                deleteButton.textContent = '제거';
                deleteButton.className = 'delete-button';
                deleteButton.addEventListener('click', () => {
                    todoList.removeChild(todoItem);
                });

                buttonsDiv.appendChild(completeButton);
                buttonsDiv.appendChild(deleteButton);
                
                todoItem.appendChild(todoTextSpan);
                todoItem.appendChild(buttonsDiv);
                todoList.appendChild(todoItem);

                todoInput.value = '';
            }
        }
    });
});