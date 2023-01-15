//import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      <Person name={"Samarth"} last={"Gupta"} age={20} />
      <Person name={"Vanshi"} last={"Shah"} age={19} />
      <Person name={"Shawty"} last={"Tiwarekar"} age={19} />

    </div>
  );
}

export default App;
