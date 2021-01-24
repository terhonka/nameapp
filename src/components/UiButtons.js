import React from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const UiButtons = ({ setListing }) => {
  return (
    <div>
      <Button handleClick={() => setListing(0)} text="Order by the amount" />
      <Button handleClick={() => setListing(1)} text="Alphabetical order" />
      <Button handleClick={() => setListing(2)} text="Total number of names" />
      <Button handleClick={() => setListing(3)} text="Amount of a name" />
    </div>
  )
}

export default UiButtons