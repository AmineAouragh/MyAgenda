import React, { useState } from 'react'
import ToDo from './components/ToDo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  const taskList = tasks.map(task => ( 
      <ToDo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
      />
  ))

  const addTask = name => {
    const newTask = { id: "id", name: name, completed: false }
    setTasks([...tasks, newTask])
  }

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
        3 tasks remaining
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
