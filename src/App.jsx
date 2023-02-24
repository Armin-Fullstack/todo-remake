import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import {MyTodoListContext} from "./context/context"


const App = () => {
  const [input , setInput] = useState("")
  const [todo , setTodo] = useState([])
 

  return (
    <>
   
   <MyTodoListContext.Provider value={todo}>

    <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo}/>

   </MyTodoListContext.Provider>

   
    
    </>
  )
}

export default App;