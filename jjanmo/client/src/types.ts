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
  | 'CHANGE_TOGGLE_ALL'
  | 'TOGGLE_TODO'
  | 'TOGGLE_ALL'
  | 'CLEAR_COMPLETED'

export interface Action<T> {
  type: ActionType
  payload: T
}
