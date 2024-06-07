export const template = document.createElement("template");

template.id = "todo-bottombar-template";
template.innerHTML = `
    <link rel="stylesheet" href="src/app/styles/reset.css" />
    <link rel="stylesheet" href="src/app/styles/global.css" />
    
    <style>
        @import url('src/widgets/todo-bottombar/ui/todo-bottombar-template/styles.css')
    </style>


    <footer class="bottombar" >
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
`;
