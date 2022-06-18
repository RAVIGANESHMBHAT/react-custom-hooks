import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  console.log("ParentTwo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
      <button onClick={() => setName("New Name")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
