/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react";

export default function Container() {
  const [s1, setS1] = useState(0);
  console.log("s1 : ", s1);

  if (s1 < 1) {
    const [s2, setS2] = useState(1);
    console.log("s2 : ", s2);
  }
  const [s3, setS3] = useState(2);
  console.log("s3 : ", s3);
  return (
    <div>
      <h1>Les règles des Hooks</h1>
      <p>EN cliquant sur ce bouton, j'excecute ... </p>
      <button onClick={() => setS1(1)}>Change State</button>
    </div>
  );
}
