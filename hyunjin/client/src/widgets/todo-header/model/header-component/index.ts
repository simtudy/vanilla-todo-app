import { TodoHeaderTemplate } from "@widgets/todo-header";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoHeaderTemplate.innerHTML;
  }
}
customElements.define("todo-header", Component);
