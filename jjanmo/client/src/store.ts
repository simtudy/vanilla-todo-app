import { State, Action, Todo } from '@/types'

const state: State = {
  todos: [],
  isAllCompleted: false,
}

const dispatch = <T>({ type, payload }: Action<T>) => {
  const updated = reducer({ type, payload })
  Object.assign(state, updated)
}

const reducer = ({ type, payload }: Action<unknown>): State => {
  switch (type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, payload as Todo],
      }
    }
    case 'EDIT_TODO': {
      const { id, text, updatedAt } = payload as Pick<Todo, 'id' | 'text' | 'updatedAt'>
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text, updatedAt } : todo)),
      }
    }
    case 'DELETE_TODO': {
      const { id } = payload as Pick<Todo, 'id'>
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      }
    }
    case 'CHANGE_TOGGLE_ALL':
      return {
        ...state,
        isAllCompleted: !state.isAllCompleted,
      }
    case 'TOGGLE_TODO':
      const { id } = payload as Pick<Todo, 'id'>
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } : todo
        ),
      }
    case 'TOGGLE_ALL':
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, status: state.isAllCompleted ? 'completed' : 'active' })),
      }
    case 'CLEAR_COMPLETED':
      return {
        todos: [],
        isAllCompleted: false,
      }
    default:
      return state
  }
}

export { state, dispatch }
