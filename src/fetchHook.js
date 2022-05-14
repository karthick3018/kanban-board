let value = null;
const useFetchHook = () => {

  const fetchData = () => {
  return new Promise((resolve) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000")
      .then((res) => res.json())
      .then(
        (result) => {
          value = result?.results;
        },
        (error) => {
          console.log("error", error);
        }
      );
       resolve();
     })
  }

  if (!value){
    throw fetchData ();
  }

  return [value];
}

export default useFetchHook;