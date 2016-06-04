import React, { Component } from 'react'
import ReactDom from 'react-dom'

const App = (props)=> {

  return (
    <div> Hi {props.name}! </div>
  )
}

const target = document.getElementById('root')

ReactDom.render(<App name="Mix"/>, target)

