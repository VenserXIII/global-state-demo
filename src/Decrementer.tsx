import React from "react";

import global from "./global";

const Decrementer = () => {
  return (
    <button onClick={global.store.decrement}>
      Decrement: {global.store.counter}
    </button>
  );
};

export default Decrementer;
