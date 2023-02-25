import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useMemo, useState } from "react";
import {MyTodoListContext} from "./context/context"


const App = () => {
  const [input , setInput] = useState("")
  const [todo , setTodo] = useState([])
  const [filterStatus , setFilterStatus] = useState("All")
  const [filteredTodo , setFilteredTodo] = useState([])

const filterHandler = () => {
  switch (filterStatus) {
    case "Completed": setFilteredTodo(todo.filter(element => element.completed === true))
    break;
    case "Uncompleted": setFilteredTodo(todo.filter(element => element.completed === false))
    break;
    default: setFilteredTodo(todo)
  }
}

useEffect(() => {
  filterHandler()
},[todo , filterStatus])

  return (
    <>
   
   <MyTodoListContext.Provider value={useMemo(() => [todo , setTodo] , [todo , setTodo])}>

    <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
    <TodoList filteredTodo={filteredTodo}/>

   </MyTodoListContext.Provider>

   
    
    </>
  )
}

export default App;