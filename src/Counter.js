import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState("");

  const handleChangeCount = (event) => {
    setCount(
      event.target.value === "-" || event.target.value === ""
        ? event.target.value
        : parseInt(event.target.value)
    );
  };

  return (
    <div>
      <p>
        Le compteur est à :{" "}
        <input type="number" value={count} onChange={handleChangeCount}></input>{" "}
      </p>

      <button
        onClick={() => {
          if (!(count === "" || count === "-")) setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          if (!(count === "" || count === "-")) setCount(count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
