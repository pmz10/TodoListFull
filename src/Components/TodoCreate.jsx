import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (e) =>{

    e.preventDefault();

    if(!title.trim()){
      return setTitle('')
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmitAddTodo}
      className="dark:bg-gray-800 flex items-center gap-4 overflow-hidden  
      rounded-md bg-white py-4 px-4 mt-8"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Crear un nuevo todo..."
        className="w-full outline-none text-gray-400 dark:bg-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
