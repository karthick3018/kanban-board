import { useEffect, useState } from "react";

let savedPowers = null;
function SuspenseComponent() {
  const [state, setState] = useState([]);

  const fetchPowers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        savedPowers = ["first", "second"];
        resolve();
      }, 3000);
    });
  };
 const [powers, setPowers] = useState(savedPowers);
 if (!powers) {
   throw fetchPowers();
 }
  const fetchTheApi = async() => {
      await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000")
        .then((res) => res.json())
        .then(
          (result) => {
            setState(result?.results);
          },
          (error) => {
            console.log("error", error);
          }
        );
  }
    useEffect(() => {
   fetchTheApi ();
  
  }, []);

  return <>{<h1>Suspense</h1> }</>;
}

export default SuspenseComponent;
