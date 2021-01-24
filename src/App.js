import React, { useState } from 'react'
import UiButtons from './components/UiButtons'
import ShowListing from './components/ShowListing'

const App = ({ names }) => {
  const [listing, setListing] = useState()  // empty for the default listing in the beginning
  const [nameStr, setNameStr] = useState('Ville')  // "Ville" as an example

  const handleNameChange = (event) => {
    setNameStr(event.target.value)
  }

  return (
    <div>
      <UiButtons setListing={setListing} />
      <ShowListing names={names} listing={listing} nameStr={nameStr} handleNameChange={handleNameChange} />
    </div>
  )
}

export default App
