import { TodoInputTemplate } from "@features/todo-input";

export class TodoInputComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(TodoInputTemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("todo-input", TodoInputComponent);
