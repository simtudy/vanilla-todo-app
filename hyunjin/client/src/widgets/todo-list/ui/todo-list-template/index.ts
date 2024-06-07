export const template = document.createElement("template");

template.id = "todo-list-template";
template.innerHTML = `
    <link rel="stylesheet" href="src/app/styles/reset.css" />
    <link rel="stylesheet" href="src/app/styles/global.css" />
    
    <style>
        @import url('src/widgets/todo-list/ui/todo-list-template/styles.css')
    </style>

    <ul class="todo-list"></ul>
`;
