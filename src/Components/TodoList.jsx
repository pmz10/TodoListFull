import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="bg-white rounded-t-md [&>article]:px-4 mt-8 transition-all duration-1000 overflow-hidden">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
