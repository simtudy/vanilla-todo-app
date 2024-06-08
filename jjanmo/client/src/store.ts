import { State, ActionTypes } from '@/types'

const state: State = {
  todos: [],
  isAllCompleted: false,
  filter: 'all',
}

const dispatch = (action: ActionTypes) => {
  const updated = reducer(action)
  Object.assign(state, updated)
}

const reducer = (action: ActionTypes): State => {
  const type = action.type
  switch (type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case 'EDIT_TODO': {
      const { id, text, updatedAt } = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text, updatedAt } : todo)),
      }
    }
    case 'DELETE_TODO': {
      const { id } = action.payload
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      }
    }
    case 'TOGGLE_TODO_ITEM': {
      const { id, updatedAt } = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active', updatedAt } : todo
        ),
      }
    }
    case 'CHANGE_TOGGLE_ALL_BTN_VISIBILITY': {
      return {
        ...state,
        isAllCompleted: !state.isAllCompleted,
      }
    }
    case 'TOGGLE_ALL_TODO_ITEMS': {
      const { updatedAt } = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          status: state.isAllCompleted ? 'completed' : 'active',
          updatedAt,
        })),
      }
    }
    case 'CLEAR_COMPLETED_ITEMS': {
      const activeTodos = state.todos.filter((todo) => todo.status === 'active')
      return {
        ...state,
        todos: activeTodos,
        isAllCompleted: activeTodos.length === 0 ? false : state.isAllCompleted,
      }
    }
    case 'CHANGE_FILTER': {
      const { filter } = action.payload
      return {
        ...state,
        filter,
      }
    }
    case 'RESET_ALL': {
      return {
        todos: [],
        isAllCompleted: false,
        filter: 'all',
      }
    }
    default:
      return state
  }
}

export { state, dispatch }
