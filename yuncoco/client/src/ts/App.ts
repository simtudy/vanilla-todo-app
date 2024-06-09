import TodoView from "./TodoView";

export default class App {
  view: TodoView;

  constructor(root: HTMLElement | null) {
    this.view = new TodoView(root);
  }
}
