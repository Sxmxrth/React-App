//import logo from './logo.svg';
import './App.css';

const App = () => {

  const name = "Samarth"
  const isName = true;

  return (
    <div className="App">
      <h1>Hello, {isName ? name : "no name"} !</h1>
    </div>
  );
}

export default App;
