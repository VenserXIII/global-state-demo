import { MouseEventHandler } from "react";

interface Global {
  store: Store;
}

interface Store {
  counter: number;
  increment: MouseEventHandler;
  decrement: MouseEventHandler;
  invert: MouseEventHandler;
  reset: MouseEventHandler;
}

export default {} as Global;
