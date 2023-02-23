import Todo from "./Todo";

const TodoList = () => {
    return (
        <>
            {/* main container  */}
            <div className="container max-w-5xl mt-20 mx-auto">
                {/* todo container  */}
                <div className="w-1/2 mx-auto flex flex-col space-y-3">
                    {/* Todo items */}
                    <Todo/>
                </div>
            </div>
        
        </>
    )
}

export default TodoList;