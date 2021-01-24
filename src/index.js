import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App';


axios.get('http://localhost:3001/names').then(response => {
  const names = response.data
  ReactDOM.render(
    <React.StrictMode>
      <App names={names} />
    </React.StrictMode>,
    document.getElementById('root')
  )
});
