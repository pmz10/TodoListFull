const TodoCreate = () => {
  return (
    <form
      className="flex items-center gap-4 overflow-hidden  
      rounded-md bg-white py-4 px-4 mt-8"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Crear un nuevo todo..."
        className="w-full outline-none text-gray-400"
      />
    </form>
  );
};

export default TodoCreate;
