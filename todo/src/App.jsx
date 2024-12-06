import { useState } from "react"
import TodoInput from "./TodoInput"
import Todolist from "./Todolist"
function App() {
  const[todos,setTodos]=useState([])
 




function handeAddTodos(newTodo){
  const newTodoList=[...todos,newTodo]
  setTodos(newTodoList)
}
function handleDeleteTodo(index){
  const newTodoList=todos.filter((todo,todoIndex)=>{
    return todoIndex!==index
  })
  setTodos(newTodoList)

}
function handleEditTodo(index){

}
 

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <Todolist handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  );
}

export default App;
