import "./Container.css";
import ScrollSpy from "./ScrollSpy.jsx";
import { useState, useSyncExternalStore } from "react";
import LessonCard from "../../components/LessonCard.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
import Callout from "../../components/Callout.jsx";
import LogPanel from "../../components/LogPanel.jsx";
import createLog from "../../components/createLog.js";

const code = `useEffect(() => {
  function handleGlobalScroll() {
    setScrollY(window.scrollY);
  }
  window.addEventListener("scroll", handleGlobalScroll);

  return () => {
    window.removeEventListener("scroll", handleGlobalScroll);
  };
}, []);`;

const logTypes = {
  mount: { icon: "🟢", tone: "ok" },
  unmount: { icon: "🔴", tone: "info" },
  cleanup: { icon: "🧹", tone: "ok" },
  ghost: { icon: "👻", tone: "bad" },
  heard: { icon: "👂", tone: "bad" },
  info: { icon: "⚙️", tone: "warn" },
};

// Liste des écouteurs branchés sur window, qu'ils appartiennent à un mouchard
// affiché ou qu'ils soient devenus des fantômes (mouchard retiré sans nettoyage).
function createListeners() {
  let listeners = [];
  let nextNumber = 1;
  const subscribers = new Set();
  const update = (next) => {
    listeners = next;
    subscribers.forEach((subscriber) => subscriber());
  };

  return {
    add(handler) {
      const number = nextNumber++;
      update([
        ...listeners,
        { number, handler, calls: 0, ghost: false, heardAsGhost: false },
      ]);
      return number;
    },
    // Compte un appel. Renvoie true la 1re fois qu'un fantôme entend un scroll.
    hear(number) {
      const listener = listeners.find((l) => l.number === number);
      const firstTimeAsGhost = listener.ghost && !listener.heardAsGhost;
      update(
        listeners.map((l) =>
          l.number === number
            ? { ...l, calls: l.calls + 1, heardAsGhost: l.ghost }
            : l,
        ),
      );
      return firstTimeAsGhost;
    },
    leave(number) {
      update(
        listeners.map((l) => (l.number === number ? { ...l, ghost: true } : l)),
      );
    },
    remove(number) {
      update(listeners.filter((l) => l.number !== number));
    },
    removeGhosts() {
      listeners
        .filter((l) => l.ghost)
        .forEach((l) => window.removeEventListener("scroll", l.handler));
      update(listeners.filter((l) => !l.ghost));
    },
    subscribe(subscriber) {
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    },
    getSnapshot: () => listeners,
  };
}

// Deux mondes côte à côte : ce que React gère (le DOM) et ce qu'il ignore (window)
function Worlds({ showSpy, listeners, log }) {
  const list = useSyncExternalStore(listeners.subscribe, listeners.getSnapshot);
  const ghosts = list.filter((l) => l.ghost).length;

  return (
    <div className="worlds">
      <div className="world">
        <p className="world-title">🌳 Le DOM, géré par React</p>
        {showSpy ? (
          <span className="chip ok">🕵️ &lt;ScrollSpy /&gt;</span>
        ) : (
          <span className="world-empty">vide : React a tout rangé ✨</span>
        )}
      </div>
      <div className="world">
        <p className="world-title">🪟 window, hors de React</p>
        {list.length === 0 ? (
          <span className="world-empty">aucun écouteur 😴</span>
        ) : (
          <ul className="chips">
            {list.map((l) => (
              <li key={l.number} className={`chip ${l.ghost ? "ghost" : "ok"}`}>
                {l.ghost ? "👻" : "👂"} #{l.number} · {l.calls} appels
              </li>
            ))}
          </ul>
        )}
        {ghosts > 0 && (
          <button
            className="ghost-button"
            onClick={() => {
              listeners.removeGhosts();
              log.push("cleanup", `${ghosts} fantôme(s) retiré(s) à la main`);
            }}
          >
            🧹 Chasser les fantômes
          </button>
        )}
      </div>
    </div>
  );
}

// Petit badge fixé en bas de l'écran : il reste visible pendant qu'on fait défiler
function Radar({ listeners }) {
  const list = useSyncExternalStore(listeners.subscribe, listeners.getSnapshot);
  const ghosts = list.filter((l) => l.ghost).length;
  if (list.length === 0) return null;

  return (
    <div className={`radar ${ghosts > 0 ? "haunted" : ""}`}>
      👂 {list.length} écouteur(s) sur window
      {ghosts > 0 && ` · 👻 ${ghosts} fantôme(s)`}
    </div>
  );
}

export default function Container() {
  const [showSpy, setShowSpy] = useState(false);
  const [cleanup, setCleanup] = useState(true);
  const [log] = useState(createLog);
  const [listeners] = useState(createListeners);

  const chooseCleanup = (value) => {
    setCleanup(value);
    log.push("info", value ? "Nettoyage activé" : "Nettoyage désactivé");
  };

  return (
    <LessonCard
      number={5}
      title="Ajouter un évènement global"
      goal="pourquoi un écouteur posé sur window ou document doit toujours être retiré dans la fonction de nettoyage."
    >
      <h2>🪟 Deux mondes : le DOM de React et window</h2>
      <p>
        Quand un composant disparaît, React le retire du{" "}
        <strong>DOM</strong> : ça, il sait le faire tout seul. Mais{" "}
        <code>window</code> et <code>document</code> sont des objets{" "}
        <strong>globaux</strong>, en dehors de React. Si ton composant y ajoute
        un écouteur avec <code>addEventListener</code>, React n&apos;en sait
        rien.
      </p>
      <p>
        Sans nettoyage ➡️ l&apos;écouteur <strong>reste actif</strong> même
        après la disparition du composant. C&apos;est à toi de le retirer, dans
        le <code>return</code> du <code>useEffect</code>.
      </p>

      <h2>🧪 Le labo du mouchard</h2>
      <div className="tabs">
        <button
          className={cleanup ? "selected" : ""}
          disabled={showSpy}
          onClick={() => chooseCleanup(true)}
        >
          ✅ Avec nettoyage
        </button>
        <button
          className={!cleanup ? "selected" : ""}
          disabled={showSpy}
          onClick={() => chooseCleanup(false)}
        >
          ❌ Sans nettoyage
        </button>
        {showSpy && (
          <span className="tabs-hint">
            Cache le mouchard pour changer de mode
          </span>
        )}
      </div>

      <div className="lab">
        <div>
          <CodeBlock
            code={code}
            highlight={
              cleanup
                ? { 5: "active", 7: "good", 8: "good", 9: "good" }
                : { 5: "active", 7: "skipped", 8: "skipped", 9: "skipped" }
            }
          />
          <button
            className="primary toggle-spy"
            onClick={() => setShowSpy(!showSpy)}
          >
            {showSpy ? "🙈 Cacher le mouchard" : "👀 Montrer le mouchard"}
          </button>
          {showSpy && (
            <ScrollSpy cleanup={cleanup} listeners={listeners} log={log} />
          )}
        </div>
        <LogPanel log={log} types={logTypes} />
      </div>
      <Worlds showSpy={showSpy} listeners={listeners} log={log} />
      <p className="scroll-hint">
        🖱️ Fais défiler la page, puis reviens ici : les compteurs d&apos;appels
        ont bougé. Le badge en bas à droite te suit pendant le défilement.
      </p>

      <h2>🎯 Petits défis</h2>
      <ul className="challenges">
        <li>
          <strong>✅ Avec nettoyage</strong> : montre le mouchard, fais défiler,
          puis cache-le. Reste-t-il quelque chose dans 🪟 window ?
        </li>
        <li>
          Passe en <strong>❌ Sans nettoyage</strong>, montre et cache le
          mouchard 3 fois, puis fais défiler : combien d&apos;écouteurs
          réagissent alors qu&apos;il n&apos;y a plus aucun mouchard ?
        </li>
        <li>
          Regarde les deux mondes après avoir caché le mouchard : pourquoi le
          DOM est-il vide alors que window ne l&apos;est pas ?
        </li>
      </ul>

      <Callout type="success" title="À retenir">
        <p>
          Tout ce que tu ajoutes sur un objet global (<code>window</code>,{" "}
          <code>document</code>) dans un <code>useEffect</code>, tu le retires
          dans sa fonction de nettoyage. React range le DOM, pas le reste.
        </p>
      </Callout>
      <Callout type="warning" title="Piège : il faut la même fonction">
        <code>removeEventListener</code> ne retire un écouteur que si tu lui
        passes <strong>exactement la même fonction</strong> qu&apos;à{" "}
        <code>addEventListener</code>. Déclare-la dans l&apos;effet et réutilise
        son nom : une nouvelle fonction fléchée écrite dans le{" "}
        <code>return</code> ne retirerait rien.
      </Callout>
      <Callout type="tip" title="Évènements globaux courants">
        <code>scroll</code> et <code>resize</code> sur <code>window</code>,{" "}
        <code>keydown</code> et <code>click</code> sur <code>document</code>{" "}
        (pour fermer un menu ou une modale, par exemple).
      </Callout>

      <Radar listeners={listeners} />
    </LessonCard>
  );
}
