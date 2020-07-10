import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const invert = () => setCounter(counter * -1);
  const reset = () => setCounter(0);

  return { counter, increment, decrement, invert, reset };
}
