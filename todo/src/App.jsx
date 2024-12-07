import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import Todolist from "./Todolist"
function App() {
  const[todos,setTodos]=useState([])
  const[todoValue,setTodoValue]=useState('')
 
function persistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos:newlist}))
}



function handleAddTodos(newTodo){
  const newTodoList=[...todos,newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}
function handleDeleteTodo(index){
  const newTodoList=todos.filter((todos,todoIndex)=>{
    return todoIndex!==index
  })
  persistData(newTodoList)
  setTodos(newTodoList)

}
function handleEditTodo(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}
useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos=localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  console.log(localTodos)
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])
 

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  );
}

export default App;
