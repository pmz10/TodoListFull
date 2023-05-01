import React, { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
import TodoComputed from "./Components/TodoComputed";
import TodoFilter from "./Components/TodoFilter";

const initialStateTodos = [
  { id: 1, title: "Lavar platos", completed: true },
  { id: 2, title: "Pasear a mis mascotas", completed: true },
  { id: 3, title: "Tender mi cama", completed: true },
  { id: 4, title: "Leer 20 paginas", completed: true },
  { id: 5, title: "Limpar un par de zapatos", completed: true },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}/>
        <TodoList todos={todos}  removeTodo={removeTodo} updateTodo={updateTodo} />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="text-center">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
