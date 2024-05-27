import { useState } from "react";

import TodoList from "./components/todoList/todoList"


import AddTodo from "./components/addTodo/addTodo"

import { useContext } from "react";

import todoContext from "./context/todoContext";

function App() {

  const [list,setList] = useState([
    { id: 1, todoData: 'todo 1',finished:false },
    { id: 2, todoData: 'todo 2',finished:false },
  ]);
  return (
    <todoContext.Provider value={{list,setList}}>
    
    <AddTodo updateList={(todo)=>setList([...list,{id:list.lenght+1 ,todoData:todo,finished:false}])}/>
    <TodoList list={list} updateList={setList}/>
    </todoContext.Provider>
  )
}

export default App
