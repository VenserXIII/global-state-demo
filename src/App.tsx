import React from "react";

import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";
import Inverter from "./Inverter";
import Resetter from "./Resetter";
import Consumer from "./Consumer";
import Wildcard from "./Wildcard";

import useCounter from "./use.counter";
import global from "./global";

const App = () => {
  global.store = useCounter();
  const { decrement, invert, reset } = global.store;
  return (
    <div>
      <p>Top-level: {global.store.counter}</p>
      <Incrementer />
      <Decrementer />
      <Inverter />
      <Resetter />
      <Consumer counter={global.store.counter} />
      <Wildcard action={global.store.increment} />
      <Wildcard action={decrement} />
      <Wildcard action={invert} />
      <Wildcard action={reset} />
    </div>
  );
};

export default App;
