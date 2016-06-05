import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)

class App extends Component {

  addTodo() {
    store.dispatch({
      type: "ADD_TODO", 
      text: this.todoInput.value
    })
    this.todoInput.value = ''
    this.todoInput.focus()
  }

  render() {
    const store = this.props.store
    const state = store.getState() || {} // NB messy
    const { todos } = state

    return (
      <div>
        <input 
          type='text'
          ref={ node => {
            this.todoInput = node
          }} 
          onKeyPress={ev => {
            if (ev.which == 13) this.addTodo()
          }}
        />
        <button
          onClick={() => this.addTodo() }
        >
          Add
        </button>
        <ul>
          {
            todos.map( todo => {
              return <li 
                key={todo.id} 
                onClick={ ev => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id:   todo.id
                  })
                }}
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                  color: todo.done ? 'grey' : 'black'
                }}>
                {todo.text}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const target = document.getElementById('root')

const render = () => {
  ReactDom.render(<App store={store} state={store.getState()} />, target)
}

store.subscribe(render)
render()

