import React, { useState } from "react";
import "./index.css";
//import CrossIcon from "./Components/Iconos/CrossIcon";
//import MoonIcon from "./Components/Iconos/MoonIcon";
import Header from "./Components/Header";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
import TodoComputed from "./Components/TodoComputed";
import TodoFilter from "./Components/TodoFilter";

const initialStateTodos =[
  {id:1, title: "Lavar platos", completed: true},
  {id:2, title: "Pasear a mis mascotas", completed: true},
  {id:3, title: "Tender mi cama", completed: true},
  {id:4, title: "Leer 20 paginas", completed: true},
  {id:5, title: "Limpar un par de zapatos", completed: true},
]

function App() {
  const [todos, setTodos] = useState(initialStateTodos)
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />
        <TodoList todos={todos}/>
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="text-center">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
