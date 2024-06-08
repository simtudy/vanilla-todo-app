export const template = document.createElement("template");

template.id = "todo-app-template";
template.innerHTML = `
    <style>
        @import url('/src/pages/todo-app/ui/todo-app-template/styles.css');
    </style>
    
    <header class="header">
      <a href="#"><h1 class="title">todos</h1></a>
    </header>

    <section class="app">
      <header class="topbar">
        <div class="new-todo-display">
          <label for="new-todo" class="visually-hidden">Enter a new todo.</label>
          <input id="new-todo" class="new-todo-input" placeholder="What needs to be done?" autofocus />
        </div>
        <div class="toggle-all-container">
          <input id="toggle-all" class="toggle-all-input" type="checkbox" />
          <label for="toggle-all" class="toggle-all-label">Mark all todos as complete.</label>
        </div>
      </header>
      <main class="main">
        <ul class="todo-list">
          <li class="todo-item">
            <div class="display-todo">
              <label for="toggle-todo" class="toggle-todo-label visually-hidden">Toggle Todo</label>
              <input id="toggle-todo" class="toggle-todo-input" type="checkbox" />
              <span class="todo-item-text truncate-singleline" tabindex="0">Placeholder Text</span>
              <button class="remove-todo-button" title="Remove Todo"></button>
            </div>
            <div class="edit-todo-container">
              <label for="edit-todo" class="edit-todo-label visually-hidden">Edit todo</label>
              <input id="edit-todo" class="edit-todo-input" />
            </div>
          </li>
        </ul>
      </main>
      <footer class="bottombar">
        <div class="todo-status"><span class="todo-count">0</span> item left</div>
        <ul class="filter-list">
          <li class="filter-item">
            <a id="filter-link-all" class="filter-link selected" href="#/" data-route="all">All</a>
          </li>
          <li class="filter-item">
            <a id="filter-link-active" class="filter-link" href="#/active" data-route="active">Active</a>
          </li>
          <li class="filter-item">
            <a id="filter-link-completed" class="filter-link" href="#/completed" data-route="completed">Completed</a>
          </li>
        </ul>
        <button id="clear-completed" class="clear-completed-button">Clear completed</button>
      </footer>
    </section>

    <footer class="footer">
      <p class="footer-text">Double-click to edit a todo</p>
      <p class="footer-text">Created by the TodoMVC Team</p>
      <p class="footer-text">Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
    
`;
