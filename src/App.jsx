import React from "react";
import "./index.css";
//import CrossIcon from "./Components/Iconos/CrossIcon";
//import MoonIcon from "./Components/Iconos/MoonIcon";
import Header from "./Components/Header";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
import TodoComputed from "./Components/TodoComputed";
import TodoFilter from "./Components/TodoFilter";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />
        <TodoList />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="text-center">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
