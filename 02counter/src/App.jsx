import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };
  const sub = () => [setCounter(counter - 1)];

  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={add}>Add value</button> {"  "}
      <button onClick={sub}>remove value</button>
    </>
  );
}

export default App;
