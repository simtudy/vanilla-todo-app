export const template = document.createElement("template");

template.id = "todo-app-template";
template.innerHTML = `
    <style>
        @import url('/src/pages/todo-app/ui/todo-app-template/styles.css');
    </style>
    
    <todo-header></todo-header>

    <section class="app">
        <todo-input></todo-input>
        <main class="main">
            <todo-list></todo-list>
        </main>
        <todo-bottombar></todo-bottombar>
    </section>

    <todo-footer></todo-footer>
    
`;
