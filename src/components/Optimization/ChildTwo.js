import React from "react";

export const ChildTwo = ({ name }) => {
  console.log("ChildTwo rendered...");
  return <div>ChildTwo Component Name = {name}</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
