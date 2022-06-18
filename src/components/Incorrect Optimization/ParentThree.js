import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  console.log("ParentThree render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
      <button onClick={() => setName("New Name")}>Change Name</button>
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
};
