import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)

class App extends Component {
  render() {
    const store = this.props.store
    const state = store.getState() || {} // NB messy
    const { todos } = state

    return (
      <div>
        <input type='text' ref={ node => {
          this.input = node
        }} />
        <button onClick={() => { 
          store.dispatch({
            type: "ADD_TODO", 
            text: this.input.value
          })
          this.input.value = ''
        }}>
          Add
        </button>
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

