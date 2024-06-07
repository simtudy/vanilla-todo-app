import { TodoListTemplate } from "@widgets/todo-list";
import { todoItemModel } from "@widgets/todo-item";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(TodoListTemplate.content.cloneNode(true));

    const todoItem = new todoItemModel.Component();
    this.shadowRoot?.appendChild(todoItem);
  }
}

customElements.define("todo-list", Component);
