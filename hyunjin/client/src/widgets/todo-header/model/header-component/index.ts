import { TodoHeaderTemplate } from "@widgets/todo-header";

export class TodoHeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoHeaderTemplate.innerHTML;
  }
}
customElements.define("todo-header", TodoHeaderComponent);
