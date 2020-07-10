import React from "react";

import global from "./global";

const Inverter = () => {
  return (
    <button onClick={global.store.invert}>
      Invert: {global.store.counter}
    </button>
  );
};

export default Inverter;
