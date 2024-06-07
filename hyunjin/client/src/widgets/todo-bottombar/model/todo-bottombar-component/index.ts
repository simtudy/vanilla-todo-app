import { TodoBottomBarTemplate } from "@widgets/todo-bottombar";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(TodoBottomBarTemplate.content.cloneNode(true));
  }
}

customElements.define("todo-bottombar", Component);
