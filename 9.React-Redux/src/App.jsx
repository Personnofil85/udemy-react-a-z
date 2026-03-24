import Counter from "./pages/Counter/Counter.jsx";
import Fruity from "./pages/Fruity/Fruity.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        <Fruity />
        <Counter />
      </div>
    </div>
  );
}

export default App;
