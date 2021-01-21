import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const ListByAmount = (props) => {
  const names = props.names
  
  return (
  <div>
    <table>
      {names
      .sort((a, b) => (b.amount > a.amount) ? 1 : -1)
      .map(n => <tr key={n.name}>{n.name} {n.amount} </tr>)  
      }
    </table>
  </div>
  )
}

const ListByName = (props) => {
  const names = props.names
  
  return (
  <div>
    <table>
      {names
      .sort((a, b) => (a.name > b.name) ? 1 : -1)
      .map(n => <tr key={n.name}>{n.name} </tr>)  
      }
    </table>
  </div>
  )
}

const TotalNumberOfNames = (props) => {
  const names = props.names

  return (
    <div>
      <p>
        Total number of names is {
        names
        .map(n => n.amount)
        .reduce((total, number) => total + number, 0)}   
      </p>
    </div>
  )
}

const AmountOfName = (props) => {
  const names = props.names
  const aName = props.aName

  return (
    <div>
      <p> Amount of names {aName} is {names.find(n => n.name === aName).amount} </p>
    </div>
  )
}


const App = (props) => {
  const names = props.names
  
  return (
    <div>
      <h2>Names listed by amounts</h2>
      <ListByAmount names={names} />
      <h2>Names listed in aplphabetical order</h2>
      <ListByName names={names} />
      <h2>Number of names in total</h2>
      <TotalNumberOfNames names={names} />
      <h2>Amount of a givem name</h2>
      <AmountOfName names={names} aName="Mikko" />

    </div>
  )
}

axios.get('http://localhost:3001/names').then(response => {
  const names = response.data
  ReactDOM.render(
    <React.StrictMode>
      <App names={names}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
});
