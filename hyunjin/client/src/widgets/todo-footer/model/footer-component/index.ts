import { TodoFooterTemplate } from "@widgets/todo-footer";

export class Component extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoFooterTemplate.innerHTML;
  }
}
customElements.define("todo-footer", Component);
