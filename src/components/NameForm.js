import React from 'react'

const NameForm = ({ nameStr, handleNameChange }) => {
  return (
    <form>
      Specify a name (case sensitive)
      <input
        value={nameStr}
        onChange={handleNameChange}
      />
    </form>
  )
}

export default NameForm