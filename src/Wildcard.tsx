import React, { FC, MouseEventHandler } from "react";

interface WildcardProps {
  action: MouseEventHandler;
}

const Wildcard: FC<WildcardProps> = ({ action }) => {
  return (
    <button onClick={action}>
      Wildcard: {action.name[0].toUpperCase() + action.name.slice(1)}
    </button>
  );
};

export default Wildcard;
