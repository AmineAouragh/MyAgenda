import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ToDo from './components/ToDo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import usePrevious from './functions/Previous'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import tasksArray from './components/Form'

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All')

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
       key={name} 
       name={name}
       isPressed={name === filter} 
       setFilter={setFilter}
    />
  ))

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

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => ( 
      <ToDo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
  ))

  const taskNoun = taskList.length !== 1 ? "tasks": "task"
  const headingText = `${taskList.length} ${taskNoun} remaining`

  const listHeadingRef = useRef(null)

  const prevTaskLength = usePrevious(tasks.length)

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus()
    }
  }, [tasks.length, prevTaskLength])

  const allStoredTasks = () => {
    var values = []
    var keys = Object.keys(localStorage)
    var i = keys.length
    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }
    return values
  }

  return (

    <div className="todoapp stack-large">
      <button>
         <WiMoonAltFirstQuarter style={{ fontSize: 28 }} className="dark-mode" />
      </button>
      <h1>My ToDo</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">

        {filterList}

      </div>

      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef} >
        {headingText}
      </h2>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        
        {taskList}
        {allStoredTasks()}

      </ul>
    </div>
  )
}

export default App
