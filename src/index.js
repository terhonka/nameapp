import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const ListByAmount = ({ names }) => {
  return (
    <table>
      <tbody>
        {names
        .sort((a, b) => (b.amount > a.amount) ? 1 : -1)
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
      <p> Amount of names {aName} is 0 </p>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const NameForm = ({nameStr, handleNameChange}) => {
  return (
    <form>
      Specify a name
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
  } 
}

const UiButtons = ({ setListing }) => {
  return (
    <div>
      <Button handleClick={() => setListing(0)} text = "Show all names and amounts ordered by amount" />
      <Button handleClick={() => setListing(1)} text = "Show all names in alphabetical order" />
      <Button handleClick={() => setListing(2)} text = "Show sum of all names" />
      <Button handleClick={() => setListing(3)} text = "Show amount of name specified in the text box below" />
    </div>
  )
}

const App = ({ names }) => {
  const [listing, setListing] = useState(0)
  const [nameStr, setNameStr] = useState('')
  
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
