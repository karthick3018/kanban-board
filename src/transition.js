import { useState, useTransition } from "react";


const TransitionButton = () => {
  const [count,setCount] = useState (0);
  const [isPending, startTransition] = useTransition();

  const handleCount = () => {
    startTransition(() => {
       setCount(prevState=>prevState+1)
      })
  }
  return (
    <div>
      {isPending && <div>Pending</div>}
      <button onClick={handleCount}>BtnCount {count}</button>
    </div>
  );
}

export default TransitionButton;