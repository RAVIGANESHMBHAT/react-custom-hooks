import React, { useState } from "react";

const initState = ["Praveen", "Kumar"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    // persons.push("Manoj");
    // persons.push("Viji");
    // setPersons(persons); //Doesn't work as the array reference didn't change and React will not rerender the component

    const newPersons = [...persons];
    newPersons.push("Manoj");
    newPersons.push("Viji");
    setPersons(newPersons);
  };

  console.log("ArrayUseState rendered...");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
};
