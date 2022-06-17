import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  console.log("GrandParent rendered");
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        Grand parent count = {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};
