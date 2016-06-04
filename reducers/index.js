//import { createStore } from 'redux'

const defaultState = () => {
  return {
    todos: [],
    activeFilter: null
  }
}

const reducer = (state = defaultState() , action) => {
  if (action == undefined || action == null) return state

  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          newTodo(action.text, state.todos)
        ]
      })
    default:
      return state //untested
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

export default reducer

