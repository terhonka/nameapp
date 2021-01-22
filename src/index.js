import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const ListByAmount = (props) => {
  const names = props.names
  
  return (
  <div>
    <ul>
      {names
      .sort((a, b) => (b.amount > a.amount) ? 1 : -1)
      .map(n => <li key={n.name}>{n.name} {n.amount} </li>) 
      }
    </ul>
  </div>
  )
}

const ListByName = (props) => {
  const names = props.names
  
  return (
  <div>
    <ul>
      {names
      .sort((a, b) => (a.name > b.name) ? 1 : -1)
      .map(n => <li key={n.name}>{n.name} </li>)  
      }
    </ul>
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

  if ((names.map(n => n.name)).includes(aName)) {
    return (
      <div>
        <p> Amount of names {aName} is {names.find(n => n.name === aName).amount} </p>
    </div>
    )
  } else {
    return (
      <div>
        <p> Amount of names {aName} is 0 </p>
      </div>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const ShowListing = (props) => {
  const {names, listing, aName} = props
  if (listing === 0) {
    return <ListByAmount names={names} />
  } else if (listing === 1) {
    return <ListByName names={names} />
  } else if (listing === 2) {
    return <TotalNumberOfNames names={names} />
  } else if (listing === 3) {
    return <AmountOfName names={names} aName={aName} />
  } 

}


const App = (props) => {
  const names = props.names
  const [listing, setListing] = useState(0)
  
  return (
    <div>
      <Button handleClick={() => setListing((listing + 1) % 4)} text = "Next listing" />
      <ShowListing names={names} listing={listing} aName="Mikko" />
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
