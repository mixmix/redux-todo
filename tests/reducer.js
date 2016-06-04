import test from 'tape'
import deepFreeze from 'deep-freeze'

import reducer from '../reducers/index'

test("Top level reducer", t => {
  const defaultState = {
    todos: [],
    activeFilter: null 
  }
  deepFreeze(defaultState)
  t.deepEqual(reducer(), defaultState, 'returns default object when given nothing')


  const someState = {a: 1}
  deepFreeze(someState)
  t.deepEqual(reducer(someState), someState, 'returns state when no action given')


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
  t.deepEqual(reducer(undefined, addToDoAction), expectedState, 'ADD_TODO action adds item to empty todos')



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

