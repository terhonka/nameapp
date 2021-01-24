import React from 'react'

const ListByAmount = ({ names }) => {
  return (
    <table>
      <tbody>
        {names
          .sort((a, b) => b.amount - a.amount)
          .map(n => <tr key={n.name}><td>{n.name}</td><td>{n.amount}</td></tr>)
        }
      </tbody>
    </table>
  )
}

export default ListByAmount