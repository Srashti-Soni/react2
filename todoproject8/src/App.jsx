
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
    <TodoProvider value={{todos,deltodo,updatetodo,addtodo,togglecomp }}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <Todo/>
        </div>
        <div className="flex flex-wrap gap-y-3">
       {todos.map((todo)=>(
        <div key={todo.id}
        className='w-full'>
         <TodoItem todo={todo}/>
        </div>
       ))}
        </div>
    </div>
</div></TodoProvider>
  )
}

export default App
