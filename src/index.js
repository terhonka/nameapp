import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const ListDefault = ( {names} ) => {
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

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const NameForm = ({ nameStr, handleNameChange}) => {
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

const UiButtons = ({ setListing }) => {
  return (
    <div>
      <Button handleClick={() => setListing(0)} text = "Show all the names and amounts ordered by the amount" />
      <Button handleClick={() => setListing(1)} text = "Show all the names in alphabetical order" />
      <Button handleClick={() => setListing(2)} text = "Show the total number of all names together" />
      <Button handleClick={() => setListing(3)} text = "Show the amount of the name specified below" />
    </div>
  )
}

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

axios.get('http://localhost:3001/names').then(response => {
  const names = response.data
  ReactDOM.render(
    <React.StrictMode>
      <App names={names}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
});
