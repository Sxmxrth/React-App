//import logo from './logo.svg';
import './App.css';
import { useState } from "react"

const Person = (props) => {
  return (
    <>
      <h1>First name : {props.name}</h1>
      <h1>Last name : {props.last}</h1>
      <h1>Age : {props.age} </h1>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">

      {/* <Person name={"Samarth"} last={"Gupta"} age={20} />
      <Person name={"Vanshi"} last={"Shah"} age={19} />
      <Person name={"Shawty"} last={"Tiwarekar"} age={19} /> */}

      <button onClick={() => { setCounter((prevcount) => prevcount - 1) }}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => { setCounter((prevcount) => prevcount + 1) }}>+</button>


    </div>
  );
}

export default App;
