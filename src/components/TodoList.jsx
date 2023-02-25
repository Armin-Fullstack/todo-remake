import Todo from "./Todo";

const TodoList = ({filteredTodo}) => {
    return (
        <>
            {/* main container  */}
            <div className="container max-w-5xl mt-28 mx-auto px-6">
                {/* todo container  */}
                <div className="w-full md:w-1/2 mx-auto flex flex-col space-y-10">
                    {filteredTodo.map(element => {
                        return (
                            <Todo key={element.id} userText={element.userText} eachTodo={element} />
                        )
                    })}
                </div>
            </div>
        
        </>
    )
}

export default TodoList;