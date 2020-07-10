import React, { FC } from "react";

import global from "./global";

interface ConsumerProps {
  counter: number
}

const Consumer:FC<ConsumerProps> = ({ counter }) => {
  return (
    <div>
      <p>As a prop: {counter}</p>
      <p>As a consumer: {global.store.counter}</p>
    </div>
  );
};

export default Consumer;
