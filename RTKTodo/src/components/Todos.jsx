import React from 'react'
import { useSelector, useDispatch } from 'react-react'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div>todos</div>
      {todos.map(() => {
        <li key={todos.id}>{todos.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))}>
            
          </button></li>
      })}
    </>
  )
}

export default Todos
