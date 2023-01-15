//import logo from './logo.svg';
import './App.css';

const App = () => {

  const name = null
  const isName = false;

  return (
    <div className="App">
      <h1>Hello, {isName ? name : "no name"} !</h1>
      {name ? (
        <>Test</>
      ) : (
        <><h1>No name</h1></>
      )}
    </div>
  );
}

export default App;
