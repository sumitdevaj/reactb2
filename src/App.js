import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState(0)
  const inc = ()=>{
    setValue((previous)=>previous+1)
    setValue((previous)=>previous+1)
    console.log(value);
  }
 return(
  <>
  {value}
    <div onClick={inc}>click me</div>
  <div>fjdncd</div>
  <h1>vjdndjcdc</h1>
  </>)
}

export default App;
