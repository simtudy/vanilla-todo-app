import { state } from '../store'
import { ToDo } from '../types'
import { v4 as uuidv4 } from 'uuid'

const $todoForm = document.querySelector('.todo-form') as HTMLFormElement
const $todoInput = document.querySelector('.todo-input') as HTMLInputElement
const $allToggleBtn = document.querySelector('.all-toggle-btn') as HTMLButtonElement

const handleSubmit = (e: Event) => {
  e.preventDefault()

  const text = $todoInput.value
  const todo: ToDo = {
    id: uuidv4(),
    text,
    status: 'active',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
  state.todos.push(todo)
  $todoInput.value = ''

  renderToogleBtn()
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
