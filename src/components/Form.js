import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function Form(props) {

    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (name.length >= 3) {
          props.addTask(name)
          localStorage.setItem("Task", name)
        }
        setName("")
    }

    const handleChange = e => {
        setName(e.target.value)
    }

    return (

        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What do I have today?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          <FaPlus style={{ marginRight: 12, paddingTop: 5 }} />
          Add Task
          
        </button>
      </form>

    )
}

export default Form
