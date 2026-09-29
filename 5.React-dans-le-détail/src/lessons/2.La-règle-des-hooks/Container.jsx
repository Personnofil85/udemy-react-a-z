import { Component, useState } from "react";

// Le code est stocké dans une chaîne : en JSX, les accolades seraient interprétées.
const code = `const [s1, setS1] = useState(0);

if (s1 < 1) {
  const [s2, setS2] = useState(1); // ❌ Hook dans une condition
  console.log("s2 : ", s2);
}

const [s3, setS3] = useState(2);`;

// Un Error Boundary attrape l'erreur de rendu au lieu de faire planter toute la page.
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <p style={{ color: "red" }}>{this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

// BadHooks contient le code fautif, avec le useState dans le if
function BadHooks() {
  const [s1, setS1] = useState(0);
  console.log("s1 : ", s1);

  if (s1 < 1) {
    const [s2, setS2] = useState(1);
    console.log("s2 : ", s2);
  }
  const [s3, setS3] = useState(2);
  console.log("s3 : ", s3);

  return (
    <>
      <button onClick={() => setS1(1)}>Change State</button>
      <p>s1 = {s1}</p>
      <p>s3 = {s3}</p>
    </>
  );
}

export default function Container() {
  return (
    <div>
      <h1>Les règles des Hooks</h1>
      <pre>
        <code>{code}</code>
      </pre>
      <br />
      <p>
        En cliquant sur ce bouton, s1 passe à 1 : le useState de s2 n'est plus
        appelé car s1 n'est pas inférieur à 1, React ne retrouve plus le même
        nombre de hooks et plante.
      </p>
      <br />
      <ErrorBoundary>
        <BadHooks />
      </ErrorBoundary>
    </div>
  );
}
