import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoItem({ todo }) {
  const [edit, setEdit] = useState(false);
  const [todomsg, settodomsg] = useState(todo.todo);

  const { updatetodo, deltodo, togglecomp } = useTodo();

  const editTodo = () => {
    updatetodo(todo.id, { ...todo, todo: todomsg });
    setEdit(false);
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl shadow-md
      transition-all duration-300
      ${
        todo.completed
          ? "bg-green-100 border-green-400"
          : "bg-white border-gray-200"
      } border`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => togglecomp(todo.id)}
        className="w-5 h-5 accent-green-500 cursor-pointer"
      />

      {/* Todo Text */}
      <input
        type="text"
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
        readOnly={!edit}
        className={`flex-1 bg-transparent px-2 py-1 rounded-md
        focus:outline-none
        ${
          edit
            ? "border border-gray-400"
            : "border border-transparent"
        }
        ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-700"
        }`}
      />

      {/* Edit / Save */}
      <button
        onClick={() => {
          if (todo.completed) return;

          edit ? editTodo() : setEdit(true);
        }}
        disabled={todo.completed}
        className="w-9 h-9 flex items-center justify-center
        rounded-full bg-blue-100 text-blue-600
        hover:bg-blue-200 transition disabled:opacity-40"
      >
        {edit ? "💾" : "✏️"}
      </button>

      {/* Delete */}
      <button
        onClick={() => deltodo(todo.id)}
        className="w-9 h-9 flex items-center justify-center
        rounded-full bg-red-100 text-red-600
        hover:bg-red-200 transition"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
