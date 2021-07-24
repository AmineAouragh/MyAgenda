import ToDo from './components/ToDo'

function App(props) {

  return (

    <div className="todoapp stack-large">
      <h1>My Agenda</h1>

      <form>
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
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      <div className="filters btn-group stack-exception">

        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>

      </div>

      <h2 id="list-heading">
        3 tasks remaining
      </h2>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        
        <ToDo name="Eat" completed={true}/>

        <ToDo name="Sleep" completed={false} />

        <ToDo name="Repeat" completed={false} />

      </ul>
    </div>
  )
}


export default App
