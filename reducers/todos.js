import { combineReducers } from 'redux'

const todos = (state = [] , action) => {
  if (action == undefined || action == null) return state

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        newTodo(action.text, state)
      ]
    case 'TOGGLE_TODO':
      return state.map( (todo) => {
        return (todo.id === action.id) ? Object.assign({}, todo, {done: !todo.done}) : todo
      })
    default:
      return state
  }
}

const newTodo = (text, todos) => {
  const lastTodo = lastElement(todos)
  return {
    id:   lastTodo ? lastTodo.id + 1 : 0,
    text: text,
    done: false
  }
}

const lastElement = array => array.slice(array.length-1)[0]

export default todos

