import "./lesson.css";

// Carte qui encadre une leçon : numéro, titre et objectif
export default function LessonCard({ number, title, goal, children }) {
  return (
    <section className="lesson">
      <header className="lesson-header">
        <span className="lesson-number">{number}</span>
        <h1>{title}</h1>
      </header>
      {goal && (
        <p className="lesson-goal">
          🎯 <strong>Ce que tu vas comprendre :</strong> {goal}
        </p>
      )}
      {children}
    </section>
  );
}