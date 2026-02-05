
import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoItem from './Components/TodoItem'
import Todo from './Components/Todo'
function App() {
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    const storedtodos=JSON.parse(localStorage.getItem("todos"))
    if(storedtodos&&storedtodos.length>0){
      setTodos(storedtodos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

const addtodo=(todo)=>{
  setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
}
const updatetodo=(id,todo)=>{
   setTodos((prev)=>prev.map((prevTodo)=>
    (prevTodo.id===id?todo:prevTodo)))
}
const deltodo=(id)=>{
setTodos((prev)=>prev.filter((todo)=>todo.id!==id ))
}
const togglecomp=(id)=>{
   setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?
{...prevTodo,completed:!prevTodo.completed}:prevTodo))
}

return (
  <TodoProvider value={{ todos, deltodo, updatetodo, addtodo, togglecomp }}>

    {/* Background */}
    <div
      className="min-h-screen bg-gradient-to-r
      from-[#f7c1cc] via-[#fbe4e8] to-[#b8dcff]
      flex justify-center pt-20"
    >
      {/* Main Card */}
      <div
        className="w-full max-w-2xl bg-white/70 backdrop-blur-lg
        shadow-xl rounded-2xl px-6 py-5"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Manage Your Todos
        </h1>

        {/* Input */}
        <div className="mb-4">
          <Todo />
        </div>

        {/* Todo List */}
      {/* Todo List */}
<div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400">
  {todos.length === 0 ? (
    <p className="text-center text-gray-500 py-6">
      No tasks yet. Add one 🚀
    </p>
  ) : (
    
    todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))
  )}
</div>

      </div>
    </div>

  </TodoProvider>
);

}

export default App
