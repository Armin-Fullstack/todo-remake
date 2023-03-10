import { useContext } from "react";
import { MyTodoListContext } from "../context/context";

const Todo = ({ userText, eachTodo }) => {
  const [todo, setTodo] = useContext(MyTodoListContext);

  const onDeleteTodo = () => {
    setTodo(todo.filter((element) => element.id !== eachTodo.id));
  };

  const onCompleteHandler = () => {
    setTodo(todo.map(element => {
      console.log(element);
      if(element.id === eachTodo.id) {
        return {
          ...element , completed: !element.completed
        }
      }
      return element
    }))
  }



  return (
    // todo's container
    <div className="flex items-center justify-center space-x-3">
      <p className={`flex flex-1 border-b border-l pb-3 pl-5 ${eachTodo.completed ? "completed" : ""}`}>{userText}</p>
      <button onClick={onCompleteHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-green-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </button>
      <button onClick={onDeleteTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
