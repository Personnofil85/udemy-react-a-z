import Container from "./lessons/1.Les-fragments/Container.jsx";
import Container2 from "./lessons/2.La-règle-des-hooks/Container.jsx";
import Container3 from "./lessons/3.Le-hook-use-effect/Container.jsx";
import Container4 from "./lessons/4.Cleanup-function/Container.jsx";
import Container5 from "./lessons/5.Ajouter-un-évènement-global/Container.jsx";

function App() {
  return (
    <div className="main-content">
      <Container />
      <hr />
      <Container2 />
      <hr />
      <Container3 />
      <hr />
      <Container4 />
      <hr />
      <Container5 />
    </div>
  );
}

export default App;
