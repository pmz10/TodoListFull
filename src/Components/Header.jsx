import MoonIcon from "./Iconos/MoonIcon";

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
          todo
        </h1>
        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
