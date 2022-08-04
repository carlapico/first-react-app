import {useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  // let count = 0; 
  const[count,setCount] = useState(0) // what it starts with and in the future you will pass other numbers through the parameter 0 
  //and creating it into a function and setting it to the two variables that will contain the value of what we are keeping track of 
  //and setting the value. 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First React App</h1>
        <p>
         You clicked the button {count} times.
        </p>
        <button onClick={ () => {
          console.log('I clicked the button ' + count);
          // count = count +1;
          setCount(count + 1) // we can set it to a specific number or a calculation.
        }}>Add One</button>
      </header>
    </div>
  );
}

export default App;
