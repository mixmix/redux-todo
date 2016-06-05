import { combineReducers } from 'redux'


const todo = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return (state.id === action.id) ?
        Object.assign({}, state, {done: !state.done}) : 
        state

    default:
      return state

  }
}

const todos = (state = [] , action) => {
  if (action == undefined || action == null) return state

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        newTodo(action.text, state)
      ]

    case 'TOGGLE_TODO':
      return state.map( t => todo(t, action) )

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

