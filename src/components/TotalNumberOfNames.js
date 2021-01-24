import React from 'react'

const TotalNumberOfNames = ({ names }) => {
  return (
    <p>
      Total number of names is {
        names
          .map(n => n.amount)
          .reduce((total, number) => total + number, 0)}
    </p>
  )
}

export default TotalNumberOfNames