import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  let updatedTodos;

  const [todos, setTodos] = useState([])
  const [editingTodo, setEditingTodo] = useState(null)

  const onCreateTodo = (todo) => {
    setTodos(todos => [...todos, todo])
  }

  const onDelete = (todoId) => {
    updatedTodos = todos.filter(({ id }) => id !== todoId)
    setTodos(updatedTodos)
    saveData(updatedTodos)
  }

  const enabledEdit = (todoId) => setEditingTodo(todoId)

  const onUpdate = (todoId, editingText) => {
    updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.text = editingText
      }

      return todo
    })

    alert(`${editingText} updated!`)
    setTodos(updatedTodos)
    setEditingTodo(null)
    saveData(updatedTodos)
  }

  const onToggleComplete = (todoId) => {
    updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }

      return todo
    })

    setTodos(updatedTodos)
    saveData(updatedTodos)
  }

  const saveData = todos => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {
    const json = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(json)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  },[])


  return (
    <div className="App">
      <div id="todo-list">
        <h1>Todo List</h1>
        <TodoForm getPayload={onCreateTodo} />
        <TodoItem
          todos={todos}
          editingTodo={editingTodo}
          handleDelete={onDelete}
          handleEdit={enabledEdit}
          handleUpdate={onUpdate}
          handleComplete={onToggleComplete} />
      </div>
    </div>
  )
}

export default App
