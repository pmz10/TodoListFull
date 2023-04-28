import CrossIcon from "./Iconos/CrossIcon";

const TodoItem = ({todo}) => {
  const {id, title, completed} = todo
  return (
    <article className="flex gap-4 border-b-gray-400 py-4 border-b">
      <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
      <p className="text-gray-600 grow">
        {title}
      </p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
