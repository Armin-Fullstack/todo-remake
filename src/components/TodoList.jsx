import Todo from "./Todo";

const TodoList = ({todo}) => {
    return (
        <>
            {/* main container  */}
            <div className="container max-w-5xl mt-28 mx-auto px-6">
                {/* todo container  */}
                <div className="w-full md:w-1/2 mx-auto flex flex-col space-y-10">
                    {todo.map(element => {
                        return (
                            <Todo key={element.id} userText={element.userText} />
                        )
                    })}
                </div>
            </div>
        
        </>
    )
}

export default TodoList;