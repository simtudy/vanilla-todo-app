import { v4 as uuidv4 } from 'uuid'
import { state, dispatch } from '@/store'
import { Todo } from '@/types'
import { renderList } from '@/components/list'

const $todoForm = document.querySelector('.todo-form') as HTMLFormElement
const $todoInput = document.querySelector('.todo-input') as HTMLInputElement
const $allToggleBtn = document.querySelector('.all-toggle-btn') as HTMLButtonElement

const handleSubmit = (e: Event) => {
  e.preventDefault()

  const todo: Todo = {
    id: uuidv4(),
    text: $todoInput.value,
    status: 'active',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  dispatch({ type: 'ADD_TODO', payload: todo })

  renderToogleBtn()
  renderList()

  $todoInput.value = ''
}

const renderToogleBtn = () => {
  const todoCount = state.todos.length
  if (todoCount === 0) $allToggleBtn.classList.add('hidden')
  else $allToggleBtn.classList.remove('hidden')
}

const handleClick = (e: Event) => {
  // 전체 선택, 해제
}

const init = () => {
  $todoForm.addEventListener('submit', handleSubmit)
  $allToggleBtn.addEventListener('click', handleClick)
}

init()
