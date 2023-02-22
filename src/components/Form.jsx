const Form = () => {
  return (
    <>
      {/* main container  */}
      <div className="container max-w-5xl mt-20 mx-auto">
        {/* title  */}
        <h1 className="text-center text-gray-600 text-4xl md:text-7xl italic">
          My Todo List
        </h1>
        {/* form  */}
        <form className="mt-20 flex justify-center space-x-3">
            {/* input and button container  */}
            <div className="w-1/2 flex justify-between space-x-2">
            <input
                    type="text"
                    className="w-full border-b border-slate-600 bg-transparent focus:outline-none placeholder:text-lg placeholder:text-gray-500"
                    placeholder="Add a task"
                />

                <button className="bg-black text-white hover:text-orange-400 p-2 rounded-lg">ADD</button>
            </div>    

        </form>
      </div>
    </>
  );
};

export default Form;
