import "./lesson.css";

// Affiche du code ligne par ligne.
// highlight associe un numéro de ligne (à partir de 1) à un style :
// "active", "good", "bad" ou "skipped".
export default function CodeBlock({ code, highlight = {} }) {
  const lines = code.split("\n");

  return (
    <pre className="code-block">
      <code>
        {lines.map((line, i) => (
          <span key={i} className={`code-line ${highlight[i + 1] ?? ""}`}>
            <span className="code-line-number">{i + 1}</span>
            {line || " "}
          </span>
        ))}
      </code>
    </pre>
  );
}