import { useState } from "react";
import Title from "./Title";

const Form = () => {
    const [input , setInput] = useState("")
    const [todo , setTodo] = useState([])

    const getUserInput = (e) => {
        setInput(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setTodo([
            ...todo, {id: crypto.randomUUID() , userText: input , completed: false}
        ])
        setInput("")
    }

  return (
    <>
      {/* main container  */}
      <div className="container max-w-5xl mt-20 mx-auto px-6">

        {/* title  */}
        <Title/>

        {/* form  */}
        <form className="mt-20 flex justify-center space-x-3">
            <input value={input}
            onChange={getUserInput}
                    type="text"
                    className="w-full md:w-1/2 border-b border-slate-600 bg-transparent focus:outline-none placeholder:text-md md:placeholder:text-lg placeholder:text-gray-500"
                    placeholder="Add a task"
                />

            <button onClick={onSubmitHandler} className="bg-black text-white text-sm hover:text-orange-400 p-2 rounded-lg">ADD</button>
             
            <select name="todos" className="w-20 md:w-32 bg-transparent outline-none border border-slate-600 p-1">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </form>
      </div>
    </>
  );
};

export default Form;
