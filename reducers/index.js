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
          {
            text: action.text,
            done: false
          }
        ]
      })

  }

}

export default reducer

