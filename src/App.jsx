import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
      <header className="container mx-auto px-4">
        <h1 className="uppercase">todo</h1>
        <button>Luna</button>
        <form>
          <input type="text" placeholder="Crear un nuevo todo..." />
        </form>
      </header>
      <main className="container mx-auto px-4">
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
        <article>
          <button>circulo</button>
          <p>Complete oline Javascript curse with PMZ</p>
          <button>Exit</button>
        </article>

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
