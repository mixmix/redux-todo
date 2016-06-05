import test from 'tape'
import deepFreeze from 'deep-freeze'

import reducer from '../../reducers/index'

const defaultState = deepFreeze({
  todos: [],
  activeFilter: 'all' 
})
  
test("Top level reducer", t => {
  t.deepEqual(reducer(), defaultState, 'returns default object when given nothing')

  const someState = deepFreeze({
    todos: ['pig', 'chicken'],
    activeFilter: 'all' 
  })

  t.deepEqual(reducer(someState), someState, 'returns state when no action given')
  t.end()
})


