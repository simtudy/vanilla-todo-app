import { dispatch, state } from '@/store'
import { State, Todo } from '@/types'
import { findItemId } from '@/utils'

const $todoList = document.querySelector('.todo-list') as HTMLUListElement

export const renderList = () => {
  const { todos, isAllCompleted } = state

  const updated = todos.map((todo) => {
    const { id, text, status } = todo
    return `
      <li key=${id} class="todo-item" id=${id}>
        <input class="todo-item-checkbox" type="checkbox"/>
        <div class="todo-content">
          <div class="todo-text">${text}</div>
          <button class="todo-item-delete-btn">✕</button>
        </div>
      </li>
    `
  })

  $todoList.innerHTML = updated.join('')
}

const handleClick = (e: Event) => {
  const className = (e.target as HTMLElement).className
  const id = findItemId(e.target as HTMLElement)
  if (!id) return

  if (className.includes('delete')) {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
    renderList()
    return
  }

  if (className.includes('checkbox')) {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } })
    renderList()
    return
  }
}

const init = () => {
  $todoList.addEventListener('click', handleClick)
}

init()
