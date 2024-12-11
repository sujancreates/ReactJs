import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="EchoEnigma"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
