import React from 'react'

const ListDefault = ({ names }) => {
  /* In the beginning list in the order in JSON file */
  return (
    <table>
      <tbody>
        {names
          .map(n => <tr key={n.name}><td>{n.name}</td><td>{n.amount}</td></tr>)
        }
      </tbody>
    </table>
  )
}

export default ListDefault 