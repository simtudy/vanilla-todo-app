import { TodoAppTemplate } from "@pages/todo-app";
import { todoHeaderModel } from "@widgets/todo-header";
import { todoFooterModel } from "@widgets/todo-footer";
import { todoInputModel } from "@widgets/todo-input";
import { todoListModel } from "@widgets/todo-list";
import { todoBottomBarModel } from "@widgets/todo-bottombar";
export class TodoAppComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = TodoAppTemplate.innerHTML;
    new todoHeaderModel.Component();
    new todoFooterModel.Component();
    new todoInputModel.Component();
    new todoListModel.Component();
    new todoBottomBarModel.Component();
  }
}
customElements.define("todo-app", TodoAppComponent);
