import "./lesson.css";

const icons = {
  tip: "💡",
  warning: "⚠️",
  success: "✅",
};

// Encadré pour mettre en avant une astuce, un piège ou une bonne pratique
export default function Callout({ type = "tip", title, children }) {
  return (
    <div className={`callout ${type}`}>
      <span className="callout-icon">{icons[type]}</span>
      <div>
        {title && <p className="callout-title">{title}</p>}
        {children}
      </div>
    </div>
  );
}