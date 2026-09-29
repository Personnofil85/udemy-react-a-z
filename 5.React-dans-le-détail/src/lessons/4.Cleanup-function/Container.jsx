import "./Container.css";
import Card from "./Card";
import { useState, useSyncExternalStore } from "react";
import LessonCard from "../../components/LessonCard.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
import Callout from "../../components/Callout.jsx";
import LogPanel from "../../components/LogPanel.jsx";
import createLog from "../../components/createLog.js";

const code = `useEffect(() => {
  const id = setInterval(() => {
    setSeconds((s) => s + 1);
  }, 1000);

  return () => {
    clearInterval(id); // 🧹 on arrête le chrono
  };
}, []);`;

const logTypes = {
  mount: { icon: "🟢", tone: "ok" },
  unmount: { icon: "🔴", tone: "info" },
  cleanup: { icon: "🧹", tone: "ok" },
  ghost: { icon: "👻", tone: "bad" },
  info: { icon: "⚙️", tone: "warn" },
};

// Liste des chronos qui tournent, qu'ils appartiennent à une carte affichée
// ou qu'ils soient devenus des fantômes (carte démontée sans nettoyage).
function createTimers() {
  let timers = [];
  let nextNumber = 1;
  const listeners = new Set();
  const update = (next) => {
    timers = next;
    listeners.forEach((listener) => listener());
  };

  return {
    add(intervalId) {
      const number = nextNumber++;
      update([...timers, { number, intervalId, seconds: 0, ghost: false }]);
      return number;
    },
    tick(number) {
      update(
        timers.map((t) =>
          t.number === number ? { ...t, seconds: t.seconds + 1 } : t,
        ),
      );
    },
    leave(number) {
      update(timers.map((t) => (t.number === number ? { ...t, ghost: true } : t)));
    },
    remove(number) {
      update(timers.filter((t) => t.number !== number));
    },
    stopGhosts() {
      timers.filter((t) => t.ghost).forEach((t) => clearInterval(t.intervalId));
      update(timers.filter((t) => !t.ghost));
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot: () => timers,
  };
}

function TimersPanel({ timers, log }) {
  const list = useSyncExternalStore(timers.subscribe, timers.getSnapshot);
  const ghosts = list.filter((t) => t.ghost).length;

  return (
    <div className="timers-panel">
      <div className="timers-header">
        <span>
          ⏲️ Chronos qui tournent : <strong>{list.length}</strong>
        </span>
        <button
          disabled={ghosts === 0}
          onClick={() => {
            timers.stopGhosts();
            log.push("cleanup", `${ghosts} fantôme(s) arrêté(s) à la main`);
          }}
        >
          🧹 Chasser les fantômes
        </button>
      </div>
      {list.length === 0 ? (
        <p className="timers-empty">Aucun chrono ne tourne. 😴</p>
      ) : (
        <ul className="timers-list">
          {list.map((t) => (
            <li key={t.number} className={`timer ${t.ghost ? "ghost" : ""}`}>
              {t.ghost ? "👻" : "⏱️"} #{t.number} · {t.seconds} s
            </li>
          ))}
        </ul>
      )}
      {ghosts > 0 && (
        <p className="timers-warning">
          Ces chronos appartiennent à des cartes qui n&apos;existent plus : ils
          consomment de la mémoire et du processeur pour rien.
        </p>
      )}
    </div>
  );
}

export default function Container() {
  const [showCard, setShowCard] = useState(false);
  const [cleanup, setCleanup] = useState(true);
  const [log] = useState(createLog);
  const [timers] = useState(createTimers);

  const chooseCleanup = (value) => {
    setCleanup(value);
    log.push("info", value ? "Nettoyage activé" : "Nettoyage désactivé");
  };

  return (
    <LessonCard
      number={4}
      title="La fonction de nettoyage (cleanup)"
      goal="comment arrêter proprement ce qu'un effet a lancé, quand le composant disparaît de la page."
    >
      <h2>💡 Éteins la lumière en sortant</h2>
      <p>
        Un effet, c&apos;est comme <strong>allumer la lumière</strong> en
        entrant dans une pièce : il démarre quelque chose (un chrono, un
        écouteur d&apos;évènement, un abonnement…). La{" "}
        <strong>fonction de nettoyage</strong>, c&apos;est{" "}
        <strong>éteindre en sortant</strong>. On la renvoie avec{" "}
        <code>return</code> à la fin de l&apos;effet, et React
        l&apos;appelle quand le composant est retiré de la page.
      </p>

      <h2>🧪 Le labo des chronos fantômes</h2>
      <div className="tabs">
        <button
          className={cleanup ? "selected" : ""}
          disabled={showCard}
          onClick={() => chooseCleanup(true)}
        >
          ✅ Avec nettoyage
        </button>
        <button
          className={!cleanup ? "selected" : ""}
          disabled={showCard}
          onClick={() => chooseCleanup(false)}
        >
          ❌ Sans nettoyage
        </button>
        {showCard && (
          <span className="tabs-hint">
            Cache la carte pour changer de mode
          </span>
        )}
      </div>

      <div className="cleanup-lab">
        <div>
          <CodeBlock
            code={code}
            highlight={
              cleanup
                ? { 6: "good", 7: "good", 8: "good" }
                : { 6: "skipped", 7: "skipped", 8: "skipped" }
            }
          />
          <button
            className="primary toggle-card"
            onClick={() => setShowCard(!showCard)}
          >
            {showCard ? "🙈 Cacher la carte" : "👀 Montrer la carte"}
          </button>
          {showCard && <Card cleanup={cleanup} timers={timers} log={log} />}
          <TimersPanel timers={timers} log={log} />
        </div>
        <LogPanel log={log} types={logTypes} />
      </div>

      <h2>🎯 Petits défis</h2>
      <ul className="challenges">
        <li>
          <strong>✅ Avec nettoyage</strong>, montre et cache la carte 3 fois :
          combien de chronos tournent à la fin ?
        </li>
        <li>
          Passe en <strong>❌ Sans nettoyage</strong> et refais pareil :
          combien de fantômes 👻 apparaissent ?
        </li>
        <li>
          Repasse en <strong>✅ Avec nettoyage</strong> : les fantômes
          disparaissent-ils tout seuls ? Pourquoi ?
        </li>
      </ul>

      <Callout type="success" title="Quand React appelle-t-il le nettoyage ?">
        <p>
          1. Quand le composant est <strong>démonté</strong> (retiré de la
          page).
        </p>
        <p>
          2. <strong>Avant de relancer l&apos;effet</strong>, si une de ses
          dépendances a changé : l&apos;ancien effet est nettoyé avant que le
          nouveau démarre.
        </p>
      </Callout>
      <Callout type="tip" title="Ce qu'on nettoie le plus souvent">
        <table className="recap">
          <tbody>
            <tr>
              <td>
                <code>setInterval</code> / <code>setTimeout</code>
              </td>
              <td>
                <code>clearInterval</code> / <code>clearTimeout</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>addEventListener</code>
              </td>
              <td>
                <code>removeEventListener</code>
              </td>
            </tr>
            <tr>
              <td>
                une requête <code>fetch</code>
              </td>
              <td>
                <code>AbortController.abort()</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Callout>
    </LessonCard>
  );
}
