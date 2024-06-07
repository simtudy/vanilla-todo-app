export const template = document.createElement("template");

template.id = "todo-header-template";
template.innerHTML = `
    <style>
        @import url('/src/widgets/todo-header/ui/header-template/styles.css');
    </style>

    <header class="header">
      <a href="#"><h1 class="title">todos</h1></a>
    </header>
`;
