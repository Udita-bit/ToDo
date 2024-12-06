import { useState } from "react"
import TodoInput from "./TodoInput"
import Todolist from "./Todolist"
function App() {
 


const[todos,setTodos]=useState([
  'Go to the gym',
    'Eat more fruits and vegetables',
    'Pick up the kids from school'

]
);
function handeAddTodos(newTodo){
  const newTodoList=[...todos,newTodo]
  setTodos(newTodoList)
}
 

  return (
    <>
      <TodoInput setTodos={setTodos}/>
      <Todolist todos={todos}/>
    </>
  );
}

export default App;
