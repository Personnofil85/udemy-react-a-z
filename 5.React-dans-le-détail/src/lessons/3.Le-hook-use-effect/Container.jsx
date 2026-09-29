import "./Container.css";
import { useEffect, useRef, useState } from "react";
import LessonCard from "../../components/LessonCard.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
import Callout from "../../components/Callout.jsx";
import LogPanel from "../../components/LogPanel.jsx";
import createLog from "../../components/createLog.js";

const colors = [
  { name: "bleu", hex: "#7c9cff" },
  { name: "vert", hex: "#4ade80" },
  { name: "orange", hex: "#fb923c" },
];

// Les 3 façons d'écrire le tableau de dépendances
const modes = [
  {
    id: "none",
    label: "Aucun tableau",
    deps: "",
    summary:
      "Sans tableau, l'effet s'exécute après CHAQUE rendu, quelle que soit la raison du rendu.",
  },
  {
    id: "empty",
    label: "[ ] vide",
    deps: ", []",
    summary:
      "Avec un tableau vide, l'effet s'exécute une seule fois, après le premier rendu. Idéal pour charger des données au démarrage.",
  },
  {
    id: "count",
    label: "[count]",
    deps: ", [count]",
    summary:
      "Avec [count], l'effet s'exécute au premier rendu, puis seulement quand count change.",
  },
];

const codeFor = (mode) => `const [count, setCount] = useState(0);
const [color, setColor] = useState("bleu");

useEffect(() => {
  console.log("⚡ Effet exécuté");
}${mode.deps});`;

function Demo({ mode, log }) {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const renderCount = useRef(0);
  const cause = useRef("premier affichage");
  const effectRan = useRef(false);
  const color = colors[colorIndex];

  // 1. Sans tableau : note chaque rendu dans le journal
  useEffect(() => {
    renderCount.current += 1;
    effectRan.current = false;
    log.push("render", `Rendu #${renderCount.current} (${cause.current})`);
  });

  // 2. L'effet étudié, avec le tableau de dépendances choisi
  const deps = { none: undefined, empty: [], count: [count] }[mode.id];
  useEffect(() => {
    effectRan.current = true;
    const reason =
      mode.id === "none"
        ? "pas de tableau : il tourne après chaque rendu"
        : renderCount.current === 1
          ? "premier rendu"
          : "count a changé";
    log.push("effect", `Effet exécuté, car ${reason}`);
  }, deps);

  // 3. Les effets s'exécutent dans l'ordre : si l'effet 2 n'a pas tourné, on le signale
  useEffect(() => {
    if (!effectRan.current) {
      const reason =
        mode.id === "empty"
          ? "tableau vide : plus jamais relancé"
          : "count n'a pas changé";
      log.push("skip", `Effet ignoré, car ${reason}`);
    }
  });

  return (
    <div className="effect-demo">
      <div className="effect-demo-values">
        <div className="effect-count">
          <span className="effect-label">count</span>
          <strong>{count}</strong>
        </div>
        <div className="effect-color">
          <span className="effect-label">color</span>
          <span className="color-swatch" style={{ background: color.hex }} />
          {color.name}
        </div>
      </div>
      <div className="effect-demo-buttons">
        <button
          className="primary"
          onClick={() => {
            cause.current = `count passe à ${count + 1}`;
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            const next = (colorIndex + 1) % colors.length;
            cause.current = `color passe à ${colors[next].name}`;
            setColorIndex(next);
          }}
        >
          🎨 Changer la couleur
        </button>
      </div>
    </div>
  );
}

const logTypes = {
  render: { icon: "🖌️", tone: "info" },
  effect: { icon: "⚡", tone: "ok" },
  skip: { icon: "⏭️", tone: "warn" },
};

export default function Container() {
  const [modeId, setModeId] = useState("count");
  const [log] = useState(createLog);
  const mode = modes.find((m) => m.id === modeId);

  return (
    <LessonCard
      number={3}
      title="Le hook useEffect"
      goal="à quel moment React exécute un effet, et comment le tableau de dépendances décide s'il doit être relancé."
    >
      <h2>⏱️ Un effet s&apos;exécute après l&apos;affichage</h2>
      <p>
        À chaque changement de state, React fait d&apos;abord un{" "}
        <strong>🖌️ rendu</strong> : il met l&apos;écran à jour. Ensuite
        seulement, il exécute le code de <code>useEffect</code> :{" "}
        <strong>⚡ l&apos;effet</strong>. Le 2e argument, le{" "}
        <strong>tableau de dépendances</strong>, lui dit quand relancer
        l&apos;effet.
      </p>

      <h2>🎛️ Choisis le tableau de dépendances</h2>
      <div className="tabs">
        {modes.map((m) => (
          <button
            key={m.id}
            className={m.id === modeId ? "selected" : ""}
            onClick={() => {
              log.clear();
              setModeId(m.id);
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="lab">
        <div>
          <CodeBlock code={codeFor(mode)} highlight={{ 6: "active" }} />
          {/* key : changer de mode recrée la démo, qui repart de zéro */}
          <Demo key={mode.id} mode={mode} log={log} />
        </div>
        <LogPanel log={log} types={logTypes} />
      </div>
      <Callout type="tip">{mode.summary}</Callout>

      <h2>🎯 Petits défis</h2>
      <ul className="challenges">
        <li>
          Avec <code>[count]</code>, clique sur 🎨 : l&apos;effet se
          déclenche-t-il ?
        </li>
        <li>
          Avec <code>[ ]</code>, clique 5 fois sur +1 : combien d&apos;effets
          vois-tu ?
        </li>
        <li>
          Sans tableau, clique sur 🎨 : que se passe-t-il cette fois ?
        </li>
      </ul>

      <Callout type="success" title="À retenir">
        <table className="recap">
          <tbody>
            <tr>
              <td>
                <code>useEffect(fn)</code>
              </td>
              <td>après chaque rendu</td>
            </tr>
            <tr>
              <td>
                <code>useEffect(fn, [])</code>
              </td>
              <td>une seule fois, après le premier rendu</td>
            </tr>
            <tr>
              <td>
                <code>useEffect(fn, [count])</code>
              </td>
              <td>au premier rendu, puis quand count change</td>
            </tr>
          </tbody>
        </table>
      </Callout>
      <Callout type="warning" title="Attention à la boucle infinie">
        Sans tableau, un <code>setCount</code> dans l&apos;effet relance un
        rendu, qui relance l&apos;effet, qui relance un rendu… Mets toujours un
        tableau de dépendances quand ton effet modifie le state.
      </Callout>
    </LessonCard>
  );
}