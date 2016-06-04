import test from 'tape'
import deepFreeze from 'deep-freeze'

import reducer from '../reducers/index'

const defaultState = deepFreeze({
  todos: [],
  activeFilter: null 
})
  
test("Top level reducer", t => {
  t.deepEqual(reducer(), defaultState, 'returns default object when given nothing')

  const someState = {a: 1}
  deepFreeze(someState)

  t.deepEqual(reducer(someState), someState, 'returns state when no action given')
  t.end()
})


test("Top level reducer: ADD_TODO action", t => {

  const addToDoAction = deepFreeze({ 
    type: "ADD_TODO",
    text: "read your emails"
  })
  const expectedState = Object.assign( {}, defaultState, {
    todos: [
      { 
        id:   0,
        text: "read your emails",
        done: false
      }
    ]
  })
  t.deepEqual(reducer(undefined, addToDoAction), expectedState, 'adds item to empty todos')


  const initialState = deepFreeze({
    todos: [ 
      { 
        id:   3,
        text: "buy milk",
        done: true
      }
    ]
  })
  const expectedState2 = {
    todos: [ 
      { 
        id:   3,
        text: "buy milk",
        done: true
      }, { 
        id:   4,
        text: "read your emails",
        done: false
      }
    ]
  }
  t.deepEqual(expectedState2, reducer(initialState, addToDoAction), 'ADD_TODO action adds items to existing array')

  t.end()
})


test("Top level reducer: TOGGLE_TODO action", t => {

  const initialState = deepFreeze({
    todos: [ 
      { 
        id:   3,
        text: "buy milk",
        done: true
      }, { 
        id:   4,
        text: "read your emails",
        done: false
      }
    ]
  })

  const expectedState1 = {
    todos: [ 
      { 
        id:   3,
        text: "buy milk",
        done: false
      }, { 
        id:   4,
        text: "read your emails",
        done: false
      }
    ]
  }
  t.deepEqual(expectedState1, reducer(initialState, {type: "TOGGLE_TODO", id: 3}), 'toggleing a todo to false works')


  t.end()
})
