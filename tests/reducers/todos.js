import test from 'tape'
import deepFreeze from 'deep-freeze'

import reducer from '../../reducers/todos'


test("todos reducer: ADD_TODO action", t => {

  const addToDoAction = deepFreeze({ 
    type: "ADD_TODO",
    text: "read your emails"
  })
  const expectedState = [
    { 
      id:   0,
      text: "read your emails",
      done: false
    }
  ]
  t.deepEqual(reducer(undefined, addToDoAction), expectedState, 'adds item to empty todos')


  const initialState = deepFreeze([ 
    { 
      id:   3,
      text: "buy milk",
      done: true
    }
  ])
  const expectedState2 = [ 
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
  t.deepEqual(expectedState2, reducer(initialState, addToDoAction), 'ADD_TODO action adds items to existing array')

  t.end()
})


test("todos reducer: TOGGLE_TODO action", t => {

  const initialState = deepFreeze([ 
    { 
      id:   3,
      text: "buy milk",
      done: true
    }, { 
      id:   4,
      text: "read your emails",
      done: false
    }
  ])

  const expectedState1 = [ 
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
  t.deepEqual(expectedState1, reducer(initialState, {type: "TOGGLE_TODO", id: 3}), 'toggleing a todo to false works')


  t.end()
})
