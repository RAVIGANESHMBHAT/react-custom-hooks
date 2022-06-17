import React, { useState } from "react";

const initState = {
  fname: "Ravi",
  lname: "Ganesh",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    // person.fname = "Raj";
    // person.lname = "Vijay";
    // setPerson(person);
    //the above way won't work because the object reference is not changed and the shallow comparision will not detect the change in object and the component will not be re - rendered.
    const newPerson = { ...person };
    newPerson.fname = "Raj";
    newPerson.lname = "Vijay";
    setPerson(newPerson);
  };

  console.log("ObjectUseState render...");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
