import React from "react";

import global from "./global";

const Incrementer = () => {
  return (
    <button onClick={global.store.increment}>
      Increment: {global.store.counter}
    </button>
  );
};

export default Incrementer;
