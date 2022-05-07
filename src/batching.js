import { useEffect, useState } from "react";

function Batching() {
  const [, setState] = useState(false);
  const [, setState1] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then(
        (result) => {
          setState1(result.name);
          setState(true);
          setState(false);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  return (
    <div>
      {console.log("re-render")}
      <h1>Batching</h1>
    </div>
  );
}

export default Batching;
