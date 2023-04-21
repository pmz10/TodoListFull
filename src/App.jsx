import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
            todo
          </h1>
          <button>Luna</button>
        </div>
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
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4">
          <article>
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">
              Complete oline Javascript curse with PMZ
            </p>
            <button>Exit</button>
          </article>
          <article>
            <button>circulo</button>
            <p>Complete oline Javascript curse with PMZ</p>
            <button>Exit</button>
          </article>
          <article>
            <button>circulo</button>
            <p>Complete oline Javascript curse with PMZ</p>
            <button>Exit</button>
          </article>
        </div>

        <section>
          <span>5 Items left</span>
          <button>Clear Complete</button>
        </section>
      </main>

      <section className="px-auto container mx-auto">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>
      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
