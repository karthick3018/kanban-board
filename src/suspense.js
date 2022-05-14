import useFetchHook from "./fetchHook";

function SuspenseComponent() {
  const [pokemonData] = useFetchHook();

  return (
  <>
  <h1>Suspense</h1> 
  {pokemonData?.length ? <p>loaded api</p>:''}
   </>
  )
}

export default SuspenseComponent;
