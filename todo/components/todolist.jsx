import React from 'react'
import TodoCard from 'TodoCard'
export default function todolist(props){
    const{todos}=props

  return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return(
                <TodoCard key={TodoIndex}>
                    <p>{todo}</p>
                </TodoCard>
                    

               

            )
        })}
    </ul>
  )
}

