import "./Container.css";
import { Component, useState } from "react";
import LessonCard from "../../components/LessonCard.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
import Callout from "../../components/Callout.jsx";

// Le code est stocké dans une chaîne : en JSX, les accolades seraient interprétées.
const badCode = `const [s1, setS1] = useState(0);

if (s1 < 1) {
  const [s2, setS2] = useState(1); // ❌ Hook dans une condition
}

const [s3, setS3] = useState(2);`;

const goodCode = `const [s1, setS1] = useState(0);
const [s2, setS2] = useState(1); // ✅ toujours appelé
const [s3, setS3] = useState(2);

if (s1 < 1) {
  console.log("s2 : ", s2); // la condition porte sur l'utilisation
}`;

// Les étapes de l'explication : lignes surlignées + contenu des casiers
const steps = [
  {
    title: "① Premier rendu",
    text: "s1 vaut 0, donc la condition s1 < 1 est vraie. React appelle 3 hooks et range chaque state dans un casier numéroté, dans l'ordre d'appel.",
    highlight: { 1: "active", 3: "good", 4: "good", 7: "active" },
    lockers: [
      { label: "s1", value: 0, status: "ok" },
      { label: "s2", value: 1, status: "ok" },
      { label: "s3", value: 2, status: "ok" },
    ],
  },
  {
    title: "② Clic sur le bouton",
    text: "setS1(1) déclenche un nouveau rendu. React relance la fonction et s'attend à retrouver les mêmes 3 hooks, dans le même ordre… mais cette fois, s1 < 1 est faux !",
    highlight: { 1: "active", 3: "bad" },
    lockers: [
      { label: "s1", value: 1, status: "ok" },
      { label: "s2", value: "?", status: "pending" },
      { label: "s3", value: "?", status: "pending" },
    ],
  },
  {
    title: "③ Boum 💥",
    text: "Le useState de s2 est sauté. Le hook de s3 atterrit dans le casier n°2 (celui de s2) et le casier n°3 reste vide. React reçoit 2 hooks au lieu de 3 : il plante avec « Rendered fewer hooks than expected ».",
    highlight: { 3: "bad", 4: "skipped", 5: "skipped", 7: "bad" },
    lockers: [
      { label: "attendu s1 → reçu s1", value: 1, status: "ok" },
      { label: "attendu s2 → reçu s3", value: "❓", status: "warn" },
      { label: "attendu s3 → vide", value: "💥", status: "bad" },
    ],
  },
];

// Un Error Boundary attrape l'erreur de rendu au lieu de faire planter toute la page.
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="crash-card">
          <p className="crash-title">
            💥 Boum ! React a perdu le compte de ses hooks
          </p>
          <p>Le message d&apos;erreur de React :</p>
          <code className="crash-message">{this.state.error.message}</code>
          <button onClick={this.props.onReset}>🔄 Réessayer</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// BadHooks contient le code fautif, avec le useState dans le if
function BadHooks() {
  const [s1, setS1] = useState(0);

  if (s1 < 1) {
    const [s2, setS2] = useState(1);
    console.log("s2 : ", s2);
  }
  const [s3, setS3] = useState(2);

  return (
    <div className="demo">
      <div className="demo-values">
        <span>
          s1 = <strong>{s1}</strong>
        </span>
        <span>
          s3 = <strong>{s3}</strong>
        </span>
      </div>
      <button className="primary" onClick={() => setS1(1)}>
        Passer s1 à 1
      </button>
    </div>
  );
}

function Lockers({ lockers }) {
  return (
    <div className="lockers">
      {lockers.map((locker, i) => (
        <div key={i} className={`locker ${locker.status}`}>
          <span className="locker-number">Casier #{i + 1}</span>
          <span className="locker-value">{locker.value}</span>
          <span className="locker-label">{locker.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Container() {
  const [step, setStep] = useState(0);
  const [tab, setTab] = useState("bad");
  const [demoKey, setDemoKey] = useState(0);
  const current = steps[step];

  return (
    <LessonCard
      number={2}
      title="Les règles des Hooks"
      goal="pourquoi un hook ne doit jamais être appelé dans une condition, une boucle ou après un return."
    >
      <h2>🗄️ React range les hooks dans des casiers numérotés</h2>
      <p>
        React ne connaît pas le <em>nom</em> de tes states. Il se souvient
        seulement de l&apos;<strong>ordre</strong> dans lequel les hooks sont
        appelés : le 1er hook va dans le casier n°1, le 2e dans le casier n°2,
        etc. À chaque rendu, il rouvre les casiers dans le même ordre.
      </p>

      <div className="stepper">
        <div className="step-header">
          <h3>{current.title}</h3>
          <div className="step-dots">
            {steps.map((s, i) => (
              <button
                key={s.title}
                className={`step-dot ${i === step ? "current" : ""}`}
                onClick={() => setStep(i)}
                aria-label={s.title}
              />
            ))}
          </div>
        </div>

        <div className="step-body">
          <CodeBlock code={badCode} highlight={current.highlight} />
          <Lockers lockers={current.lockers} />
        </div>
        <p className="step-text">{current.text}</p>

        <div className="step-nav">
          <button disabled={step === 0} onClick={() => setStep(step - 1)}>
            ← Précédent
          </button>
          <button
            className="primary"
            disabled={step === steps.length - 1}
            onClick={() => setStep(step + 1)}
          >
            Étape suivante →
          </button>
        </div>
      </div>

      <h2>🧪 À toi de tester</h2>
      <p>
        Ce composant contient vraiment le code ci-dessus. Clique pour le casser :
      </p>
      <ErrorBoundary key={demoKey} onReset={() => setDemoKey(demoKey + 1)}>
        <BadHooks />
      </ErrorBoundary>

      <h2>🛠️ Comment corriger ?</h2>
      <div className="tabs">
        <button
          className={tab === "bad" ? "selected" : ""}
          onClick={() => setTab("bad")}
        >
          ❌ À ne pas faire
        </button>
        <button
          className={tab === "good" ? "selected" : ""}
          onClick={() => setTab("good")}
        >
          ✅ À faire
        </button>
      </div>
      {tab === "bad" ? (
        <CodeBlock code={badCode} highlight={{ 4: "bad" }} />
      ) : (
        <CodeBlock
          code={goodCode}
          highlight={{ 2: "good", 5: "good", 6: "good" }}
        />
      )}
      <p className="tab-text">
        {tab === "bad"
          ? "Le hook n'est appelé que si la condition est vraie : le nombre de casiers change d'un rendu à l'autre."
          : "Le hook est toujours appelé, au même endroit. C'est l'utilisation de la valeur qui est conditionnelle."}
      </p>

      <Callout type="success" title="Les 2 règles des hooks à retenir">
        <p>
          1. Appelle les hooks <strong>tout en haut</strong> du composant :
          jamais dans un <code>if</code>, une boucle ou après un{" "}
          <code>return</code>.
        </p>
        <p>
          2. Appelle-les uniquement dans un <strong>composant React</strong> ou
          dans un <strong>hook personnalisé</strong> (
          <code>useQuelqueChose</code>).
        </p>
      </Callout>
      <Callout type="tip" title="Astuce">
        Le plugin ESLint <code>eslint-plugin-react-hooks</code> détecte ces
        erreurs directement dans ton éditeur.
      </Callout>
    </LessonCard>
  );
}