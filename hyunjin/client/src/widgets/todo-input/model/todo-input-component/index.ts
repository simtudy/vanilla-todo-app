import { TodoInputTemplate } from "@widgets/todo-input";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(TodoInputTemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("todo-input", Component);
