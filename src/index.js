import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import allStoredTasks from './App'

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
]


const entries = Object.entries(localStorage)

const obj = Object.fromEntries(entries)

console.log(obj)

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById('root')
)

