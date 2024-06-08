export type Status = 'active' | 'completed'

export interface Todo {
  id: string
  text: string
  status: Status
  createdAt: number
  updatedAt: number
}

export type Filter = 'all' | 'active' | 'completed'

export interface State {
  todos: Todo[]
  isAllCompleted: boolean
  filter: Filter
}

export type ActionTypes =
  | AddTodoAction
  | EditTodoAction
  | DeletTodoAction
  | ToggleTodoItemAction
  | ChangToggleAllBtnVisibilityAction
  | ToggleAllTodoItemsAction
  | ClearCompletedItemsAction
  | ChangeFilterAction
  | ResetAllAction

export type AddTodoAction = {
  type: 'ADD_TODO'
  payload: Todo
}
export type EditTodoAction = {
  type: 'EDIT_TODO'
  payload: Pick<Todo, 'id' | 'text' | 'updatedAt'>
}
export type DeletTodoAction = {
  type: 'DELETE_TODO'
  payload: Pick<Todo, 'id'>
}
export type ToggleTodoItemAction = {
  type: 'TOGGLE_TODO_ITEM'
  payload: Pick<Todo, 'id' | 'updatedAt'>
}
export type ChangeFilterAction = {
  type: 'CHANGE_FILTER'
  payload: Pick<State, 'filter'>
}
export type ToggleAllTodoItemsAction = {
  type: 'TOGGLE_ALL_TODO_ITEMS'
  payload: Pick<Todo, 'updatedAt'>
}
export type ChangToggleAllBtnVisibilityAction = {
  type: 'CHANGE_TOGGLE_ALL_BTN_VISIBILITY'
}
export type ClearCompletedItemsAction = {
  type: 'CLEAR_COMPLETED_ITEMS'
}
export type ResetAllAction = {
  type: 'RESET_ALL'
}
