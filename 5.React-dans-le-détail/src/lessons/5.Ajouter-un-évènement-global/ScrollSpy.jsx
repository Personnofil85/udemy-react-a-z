import { useEffect, useState } from "react";

// Le mouchard écoute le scroll de toute la page, grâce à un écouteur posé sur window.
export default function ScrollSpy({ cleanup, listeners, log }) {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    let number;

    function handleGlobalScroll() {
      setScrollY(window.scrollY);
      if (listeners.hear(number)) {
        log.push(
          "heard",
          `Écouteur #${number} : « J'ai entendu un scroll ! » (mais son composant n'existe plus)`,
        );
      }
    }

    window.addEventListener("scroll", handleGlobalScroll);
    number = listeners.add(handleGlobalScroll);
    log.push("mount", `Mouchard monté : écouteur #${number} ajouté sur window`);

    // Le return est toujours là pour écrire dans le journal.
    // Quand le nettoyage est « désactivé », il ne retire pas l'écouteur :
    // c'est comme si la fonction de nettoyage n'existait pas.
    return () => {
      log.push("unmount", "Mouchard retiré du DOM par React");
      if (cleanup) {
        window.removeEventListener("scroll", handleGlobalScroll);
        listeners.remove(number);
        log.push("cleanup", `Nettoyage : écouteur #${number} retiré de window`);
      } else {
        listeners.leave(number);
        log.push("ghost", `Écouteur #${number} toujours branché sur window !`);
      }
    };
  }, []);

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.round((scrollY / maxScroll) * 100) : 0;

  return (
    <div className="spy">
      <span className="spy-icon">🕵️</span>
      <div className="spy-body">
        <p>
          Je surveille le défilement de la page : <strong>{Math.round(scrollY)} px</strong>
        </p>
        <div className="spy-bar">
          <div className="spy-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
