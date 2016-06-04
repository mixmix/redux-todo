import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)

class App extends Component {
  render() {
    const store = this.props.store
    const state = store.getState() || {}
    const { todos } = state

    return (
      <div>
        <input type='text' />
        <button onClick={
          ()=> { store.dispatch({type: "ADD_TODO", text: "yes!"}) }
          
        }>Add</button>
        <ul>
          {
            todos.map( todo => {
              return <li key={todo.id}>{todo.text}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const target = document.getElementById('root')

const render = () => {
  ReactDom.render(<App store={store} />, target)
}

store.subscribe(render)
render()

