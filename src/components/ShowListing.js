import React from 'react'
import ListByAmount from './ListByAmount'
import ListByName from './ListByName'
import TotalNumberOfNames from './TotalNumberOfNames'
import NameForm from './NameForm'
import AmountOfName from './AmountOfName'
import ListDefault from './ListDefault'

const ShowListing = ({ names, listing, nameStr, handleNameChange }) => {
  if (listing === 0) {
    return <ListByAmount names={names} />
  } else if (listing === 1) {
    return <ListByName names={names} />
  } else if (listing === 2) {
    return <TotalNumberOfNames names={names} />
  } else if (listing === 3) {
    return (
      <div>
        <NameForm nameStr={nameStr} handleNameChange={handleNameChange} />
        <AmountOfName names={names} aName={nameStr} />
      </div>
    )
  } else return <ListDefault names={names} />
}

export default ShowListing