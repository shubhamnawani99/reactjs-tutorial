import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import TodoForm from "./Components/TodoForm"

function App() {
  const [todos, setTodos] = useState([])  // All todos are stored here

  const addTodo = (title) => {
    const todo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    setTodos((previousTodo) => [...previousTodo, todo])
  }

  const updateTodo = (id, title) => {
    setTodos((previousTodo) => {
      const todo = previousTodo.find((todo) => todo.id === id)
      todo.title = title
      return [...previousTodo]
    })
  }

  const deleteTodo = (id) => {
    setTodos((previousTodo) => previousTodo.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((previousTodo) => {
      const todo = previousTodo.find((todo) => todo.id === id)
      todo.completed = !todo.completed
      return [...previousTodo]
    })
  }

  useEffect(() => {
    const todos = localStorage.getItem("todos")
    if (todos && todos.length > 0){
      setTodos(JSON.parse(todos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, 
    deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo) => (
                      <TodoItem key={todo.id} todo={todo} />
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
