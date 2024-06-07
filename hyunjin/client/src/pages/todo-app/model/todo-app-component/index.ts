import { TodoAppTemplate } from "@pages/todo-app";

export class TodoAppComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoAppTemplate.innerHTML;
  }
}
customElements.define("todo-app", TodoAppComponent);
