import React from 'react'

export default function todolist(){
    let todos=[
        'Go to the gym',
        'Eat more fruits and vegetables',
        'Pick up the kids from school'

    ]

  return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return(
                <li className='todoItem 'key={todoIndex}>
                    {todo}
                    <i class="fa-solid fa-pen-to-square"></i>
                    </li>
                    

               

            )
        })}
    </ul>
  )
}

