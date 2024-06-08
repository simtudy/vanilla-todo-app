export type Status = 'active' | 'completed'

export interface Todo {
  id: string
  text: string
  status: Status
  createdAt: number
  updatedAt: number
}

export interface State {
  todos: Todo[]
  isAllCompleted: boolean
}

export type ActionType =
  | 'ADD_TODO'
  | 'EDIT_TODO'
  | 'DELETE_TODO'
  | 'TOGGLE_TODO_ITEM'
  | 'CHANGE_TOGGLE_ALL_BTN_VISIBILITY'
  | 'TOGGLE_ALL_TODO_ITEMS'
  | 'CLEAR_COMPLETED_ITEMS'

export interface Action<T> {
  type: ActionType
  payload?: T
}
