import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [input , setInput] = useState("")
  const [todo , setTodo] = useState([])
  return (
    <>

    <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo}/>
    
    </>
  )
}

export default App;