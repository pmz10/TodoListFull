import React from "react";
import "./index.css";
import CrossIcon from "./Components/Iconos/CrossIcon";
import MoonIcon from "./Components/Iconos/MoonIcon";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
            todo
          </h1>
          <button>
            <MoonIcon fill="#ff29ea" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-8">
        {/*TodoCreate*/}
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
        {/*TodoList (TodoItems) TodoUpdate TodoDelete*/}
        <div className="bg-white rounded-md [&>article]:px-4">
          <article className="flex gap-4 border-b-gray-400 py-4 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete oline Javascript curse with PMZ
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 py-4 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete oline Javascript curse with PMZ
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 py-4 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete oline Javascript curse with PMZ
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>
        {/*TodoComputed*/}
        <section className="py-4 px-4 flex justify-between">
          <span className="text-gray-400">5 Items left</span>
          <button className="text-gray-400">Clear Complete</button>
        </section>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center bg-white p-4 rounded-md gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
