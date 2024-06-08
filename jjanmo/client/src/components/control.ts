import { dispatch, state } from '@/store'

const $controlContainer = document.querySelector('.control-container') as HTMLDivElement
const $filterContainer = document.querySelector('.filter-container') as HTMLDivElement
const $todoCount = document.querySelector('.todo-count') as HTMLDivElement
const $clearCompletedBtn = document.querySelector('.clear-completed-btn') as HTMLButtonElement

// by todo-item 개수
export const renderControlContainer = () => {
  const todoCount = state.todos.length
  if (todoCount === 0) $controlContainer.classList.add('hidden')
  else $controlContainer.classList.remove('hidden')

  $todoCount.textContent = `${state.todos.length} items left`
}

// by todo-item 상태
export const renderClearCompletedBtn = () => {
  const { todos } = state
  const completedCount = todos.filter((todo) => todo.status === 'completed').length
  const $btnText = $clearCompletedBtn.querySelector('& > span') as HTMLSpanElement
  if (completedCount > 0) $btnText.classList.remove('hidden')
  else $btnText.classList.add('hidden')
}

const handleFilterClick = () => {}

const handleClearCompletedBtnClick = () => {
  dispatch({ type: 'CLEAR_COMPLETED_ITEMS' })
}

const init = () => {
  $filterContainer.addEventListener('click', handleFilterClick)
  $clearCompletedBtn.addEventListener('click', handleClearCompletedBtnClick)
}

init()
