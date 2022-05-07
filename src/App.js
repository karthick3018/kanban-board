import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then(
        (result) => {
          setState1(result.name);
          setState(true);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  return (
    <div className="App">
      {console.log("re-render")}
      <h1>react 18</h1>
    </div>
  );
}

export default App;
