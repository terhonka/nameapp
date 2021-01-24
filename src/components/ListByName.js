import React from 'react'

const ListByName = ({ names }) => {
  return (
    <table>
      <tbody>
        {names
          .sort((a, b) => (a.name > b.name) ? 1 : -1)
          .map(n => <tr key={n.name}><td>{n.name}</td></tr>)
        }
      </tbody>
    </table>
  )
}

export default ListByName