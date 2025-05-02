
import React, {useState} from 'react'
import { useTodo } from '../Context/TodoContext';
function TodoItem({ todo }) {
   const [edit,setEdit]= useState(false)
   const [todomsg,settodomsg]=useState(todo.todo)
    const {updatetodo,deltodo,togglecomp} = useTodo()
const editTodo=()=>{
  updatetodo(todo.id,{...todo,todo:todomsg})
  setEdit(false)
}
const togglecompleted=()=>{
  togglecomp(todo.id)
}

  return (
<div
    className={`flex border border-black/10 rounded-lg px-3 
      py-1.5 gap-x-3 shadow-sm shadow-white/50  duration-300  
      text-black ${ todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}
>
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={togglecompleted}
    />
    <input
        type="text"
        className={`border outline-none w-full bg-transparent
           rounded-lg ${  edit ? 
            "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
        readOnly={!edit}
    />
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.completed) return;

            if (edit) {
                editTodo();
            } else setEdit((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {edit ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deltodo(todo.id)}
    >
        ❌
    </button>
</div>
  );
}
export default TodoItem

// import React, { useState } from 'react';
// import { useTodo } from '../Context/TodoContext';

// function TodoItem({ todo }) {
//   if (!todo) {
//     return null; // Prevent rendering if 'todo' is undefined
//   }

//   const [edit, setEdit] = useState(false);
//   const [todomsg, settodomsg] = useState(todo.todo || ''); // Fallback to an empty string
//   const { updatetodo, deltodo, togglecomp } = useTodo();

//   const editTodo = () => {
//     updatetodo(todo.id, { ...todo, todo: todomsg });
//     setEdit(false);
//   };

//   const togglecompleted = () => {
//     togglecomp(todo.id);
//   };

//   return (
//     <div
//       className={`flex border border-black/10 rounded-lg px-3 
//         py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  
//         text-black ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}
//     >
//       <input
//         type="checkbox"
//         className="cursor-pointer"
//         checked={todo.completed}
//         onChange={togglecompleted}
//       />
//       <input
//         type="text"
//         className={`border outline-none w-full bg-transparent
//           rounded-lg ${edit ? 'border-black/10 px-2' : 'border-transparent'} ${
//           todo.completed ? 'line-through' : ''
//         }`}
//         value={todomsg}
//         onChange={(e) => settodomsg(e.target.value)}
//         readOnly={!edit}
//       />
//       {/* Edit, Save Button */}
//       <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//         onClick={() => {
//           if (todo.completed) return;

//           if (edit) {
//             editTodo();
//           } else setEdit((prev) => !prev);
//         }}
//         disabled={todo.completed}
//       >
//         {edit ? '📁' : '✏️'}
//       </button>
//       {/* Delete Todo Button */}
//       <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//         onClick={() => deltodo(todo.id)}
//       >
//         ❌
//       </button>
//     </div>
//   );
// }

// export default TodoItem;