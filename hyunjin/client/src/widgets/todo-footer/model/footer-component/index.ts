import { TodoFooterTemplate } from "@widgets/todo-footer";

export class TodoFooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoFooterTemplate.innerHTML;
  }
}
customElements.define("todo-footer", TodoFooterComponent);
