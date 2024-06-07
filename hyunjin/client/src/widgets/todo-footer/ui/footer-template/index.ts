export const template = document.createElement("template");

template.id = "todo-footer-template";
template.innerHTML = `
    <style>
        @import url('/src/widgets/todo-footer/ui/footer-template/styles.css');
    </style>

    <footer class="footer">
      <p class="footer-text">Double-click to edit a todo</p>
      <p class="footer-text">Created by the TodoMVC Team</p>
      <p class="footer-text">Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
`;
