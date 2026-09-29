import "./lesson.css";
import { useSyncExternalStore } from "react";

// Affiche un journal créé avec createLog.
// types associe chaque type d'entrée à une icône et une couleur :
// { mount: { icon: "🟢", tone: "ok" } }, avec tone = "info", "ok", "warn" ou "bad".
export default function LogPanel({ log, types }) {
  const entries = useSyncExternalStore(log.subscribe, log.getSnapshot);

  return (
    <div className="log-panel">
      <div className="log-header">
        <span>📜 Journal</span>
        <button onClick={log.clear}>🧹 Vider</button>
      </div>
      {entries.length === 0 ? (
        <p className="log-empty">
          Clique sur un bouton pour voir ce qui se passe…
        </p>
      ) : (
        <ol className="log-entries">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className={`log-entry ${types[entry.type].tone}`}
            >
              {types[entry.type].icon} {entry.text}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
