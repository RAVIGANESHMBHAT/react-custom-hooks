import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = () => {
  const [count, setCount] = useState(0);
  console.log("ContextParent rendered...");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
      <CountProvider value={count}>
        {/* <ChildA /> */}
        <MemoizedChildA />
      </CountProvider>
    </div>
  );
};
