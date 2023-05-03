import CheckIcon from "./Iconos/CheckIcon";
import CrossIcon from "./Iconos/CrossIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b-gray-400 py-4 border-b dark:bg-gray-800">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p className={`grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
