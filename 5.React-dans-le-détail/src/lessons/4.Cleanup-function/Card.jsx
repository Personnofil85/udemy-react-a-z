import { useEffect, useState } from "react";
import "./Card.css";

// La carte démarre un vrai chrono (setInterval) quand elle apparaît.
export default function Card({ cleanup, timers, log }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let number;
    const intervalId = setInterval(() => {
      timers.tick(number);
      setSeconds((s) => s + 1);
    }, 1000);
    number = timers.add(intervalId);
    log.push("mount", `Carte montée : chrono #${number} démarré`);

    // Le return est toujours là pour écrire dans le journal.
    // Quand le nettoyage est « désactivé », il n'arrête pas le chrono :
    // c'est comme si la fonction de nettoyage n'existait pas.
    return () => {
      log.push("unmount", "Carte démontée");
      if (cleanup) {
        clearInterval(intervalId);
        timers.remove(number);
        log.push("cleanup", `Nettoyage : chrono #${number} arrêté`);
      } else {
        timers.leave(number);
        log.push("ghost", `Chrono #${number} tourne toujours dans le vide !`);
      }
    };
  }, []);

  return (
    <div className="card">
      <span className="card-clock">⏱️</span>
      <div>
        <p>Je suis la carte !</p>
        <p className="card-seconds">{seconds} s</p>
      </div>
    </div>
  );
}
