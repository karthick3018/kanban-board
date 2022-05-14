import { Suspense } from "react";
import Batching from "./batching";
import SuspenseComponent from "./suspense";
import TransitionButton from './transition';

function App() {
  const Loader = () => {
    console.log('here')
    return (
      <div>
        <h1>fetching pokemons ......</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>react 18</h1>
      <Batching />
      <Suspense fallback={<Loader />}>
        <SuspenseComponent />
      </Suspense>
      <TransitionButton />
    </div>
  );
}

export default App;
