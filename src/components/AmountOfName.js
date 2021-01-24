import React from 'react'

const AmountOfName = ({ names, aName }) => {
  if ((names.map(n => n.name)).includes(aName)) {
    return (
      <p> Amount of names {aName} is {names.find(n => n.name === aName).amount} </p>
    )
  } else {
    return (
      <p> Name {aName} not found! </p>
    )
  }
}

export default AmountOfName 