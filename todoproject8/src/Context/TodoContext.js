import { useContext,createContext } from "react";
export const TodoContext = createContext({
    todos:[
        {id:1, todo:"msg",completed:false},
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deltodo:(id)=>{},
    togglecomp:(id)=>{}
})

export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
 return useContext(TodoContext)
}