import React from 'react'

export const ChildFive = ({ name, person }) => {
    console.log("ChildFive rendered...")
  return (
      <div>
          Hello {name} {person.fname} {person.lname}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
