export default class TodoView {
  root: HTMLElement | null;
  onTodoAdd: ((todo: string) => void) | undefined;
  onTodoSelect: (() => void) | undefined;
  onTodoEdit: (() => void) | undefined;
  onTodoDelete: (([]: string[]) => void) | undefined;

  constructor(
    root: HTMLElement | null,
    handlers: {
      onTodoAdd?: (todo: string) => void;
      onTodoSelect?: () => void;
      onTodoEdit?: () => void;
      onTodoDelete?: ([]: string[]) => void;
    } = {}
  ) {
    this.root = root;
    Object.assign(this, handlers); // 객체 비구조화 할당을 통해 반복 줄이기

    if (this.root) {
      this.root.innerHTML = `
        <h1 class="page__title">todos</h1>
        <div class="page__body">
            <input
            class="todos__input"
            type="text"
            placeholder="todo를 입력하세요"
            />
            <div class="todos__list">
                <div class="todos__menu">
                    <div class="todos__check-all">
                        <label for="todos__check-all" >check/uncheck all</label>
                        <input id="todos__check-all" class="todos__check-all__input" type="checkbox" />
                    </div>
                    <button class="todos__delete-all" type="button">Clear Completed</button>
                </div>
                <div class="todos__list"></div>
            </div>
        </div>
      `;

      const inpTodo =
        this.root.querySelector<HTMLInputElement>(".todos__input");

      inpTodo &&
        inpTodo.addEventListener("keypress", (event) => {
          if (event.key === "Enter" && this.onTodoAdd) {
            const newTodo = inpTodo.value.trim();

            this.onTodoAdd(newTodo);
          }
        });
    }
  }
}
