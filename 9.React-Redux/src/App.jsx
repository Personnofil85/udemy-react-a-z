import Counter from "./pages/Counter/Counter.jsx";
import Fruity from "./pages/Fruity/Fruity.jsx";
import Users from "./pages/Users/Users.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        <Users />
        <Fruity />
        <Counter />
      </div>
    </div>
  );
}

export default App;
