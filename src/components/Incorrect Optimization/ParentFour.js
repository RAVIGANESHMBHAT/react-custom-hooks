import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  const person = {
    fname: "Bruce",
    lname: "Lee",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {}; // passing this function as the prop to MemoizedChildFive will cause that component to re-render if the ParentFour prop changes

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
      <button onClick={() => setName("New Name")}>Change Name</button>
      {/* <MemoizedChildFive name={name} person={person}></MemoizedChildFive> */}
      {/* <MemoizedChildFive
        name={name}
        person={memoizedPerson}
      ></MemoizedChildFive> */}
      <MemoizedChildFive
        name={name}
        handleClick={memoizedHandleClick}
      ></MemoizedChildFive>
    </div>
  );
};
