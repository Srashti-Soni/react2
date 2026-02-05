import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function Todo() {
  const [todo, setTodo] = useState("");
  const { addtodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addtodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300
        focus:outline-none focus:ring-2 focus:ring-green-400
        text-gray-700"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-gradient-to-r 
        from-green-500 to-emerald-600 text-white
        font-medium shadow hover:scale-105 transition"
      >
        Add
      </button>
    </form>
  );
}

export default Todo;
