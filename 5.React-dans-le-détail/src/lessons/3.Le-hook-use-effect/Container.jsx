import "./Container.css";
import { useEffect, useState } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Après 1ere création et après chaque mise à jour du DOM");
  }, [count]);

  console.log("Mise à jour setCount", count);
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  );
}
