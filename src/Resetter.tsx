import React from "react";

import global from "./global";

const Resetter = () => {
  return (
    <button onClick={global.store.reset}>
      Reset: {global.store.counter}
    </button>
  );
};

export default Resetter;
