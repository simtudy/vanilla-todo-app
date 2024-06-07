import { TodoItemTemplate } from "@widgets/todo-item";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(TodoItemTemplate.content.cloneNode(true));
  }
}

customElements.define("todo-item", Component);
