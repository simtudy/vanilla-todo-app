export type Status = 'active' | 'completed'

export interface ToDo {
  id: string
  text: string
  status: Status
  createdAt: number
  updatedAt: number
}

export interface State {
  todos: ToDo[]
}
