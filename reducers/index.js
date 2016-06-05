import { combineReducers } from 'redux'
import todos from './todos'
import activeFilter from './activeFilter'


//const reducer = (state={}, action) => {
  //return {
    //todos:        todos(state.todos, action),
    //activeFilter: activeFilter(state.activeFilter, action)
  //}
//}

const reducer = combineReducers({
  todos,
  activeFilter
})

export default reducer

