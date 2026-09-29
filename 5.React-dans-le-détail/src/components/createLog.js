// Petit journal partagé entre une démo (qui écrit) et un LogPanel (qui lit).
// Il vit en dehors du state de la démo : écrire dedans ne relance pas son rendu,
// sinon chaque effet provoquerait un nouveau rendu… et une boucle infinie.
export default function createLog() {
  let entries = [];
  let nextId = 0;
  const listeners = new Set();
  const notify = () => listeners.forEach((listener) => listener());

  return {
    push(type, text) {
      entries = [...entries, { id: nextId++, type, text }].slice(-30);
      notify();
    },
    clear() {
      entries = [];
      notify();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot: () => entries,
  };
}
