import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import ToDo from './components/ToDo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  const toggleTaskCompleted = id => {

    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updatedTasks)

  }

  const addTask = name => {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  const taskList = tasks.map(task => ( 
      <ToDo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
  ))

  const taskNoun = taskList.length !== 1 ? "tasks": "task"
  const headingText = `${taskList.length} ${taskNoun} remaining`

  return (

    <div className="todoapp stack-large">
      <h1>My Agenda</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">

        <FilterButton />
        <FilterButton />
        <FilterButton />

      </div>

      <h2 id="list-heading">
        {headingText}
      </h2>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        
        {taskList}

      </ul>
    </div>
  )
}


export default App
