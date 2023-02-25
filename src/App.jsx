import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useMemo, useState } from "react";
import {MyTodoListContext} from "./context/context"


const App = () => {
  const [input , setInput] = useState("")
  const [todo , setTodo] = useState([])
  const [filterStatus , setFilterStatus] = useState("All")

  return (
    <>
   
   <MyTodoListContext.Provider value={useMemo(() => [todo , setTodo] , [todo , setTodo])}>

    <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
    <TodoList todo={todo}/>

   </MyTodoListContext.Provider>

   
    
    </>
  )
}

export default App;