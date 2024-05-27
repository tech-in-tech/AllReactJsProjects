import Todo from "../todo/todo";
import todoContext from "../../context/todoContext";
import { useContext } from "react";

function TodoList() {
  const {list,setList} = useContext(todoContext)

  return (
    <div>
      {list.length > 0 && 
      list.map((todo) => <Todo 
      key={todo.id} 
      id = {todo.id}
      isFinished={todo.finished} 
      todoData={todo.todoData}
      changeFinished={(isFinished)=>{
        const updatedList = list.map(t=>{
          if(t.id==todo.id){
            todo.finished=isFinished;
          }
          return t;
        });
        setList(updatedList);
      }}
      />)}
    </div>
  )
}

export default TodoList