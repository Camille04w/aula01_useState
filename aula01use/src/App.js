
import CalculadoraDeSoma from './components/soma';
import React,{useState} from 'react'
import './App.css';
import CalculadoraDeSubtracao from './components/subtracao';

function App() {
  const[contador,setContador]=useState(0);

  return (
    <div className="App">
    <h1>Calculadora</h1>
      <CalculadoraDeSoma />
      <CalculadoraDeSubtracao />
    </div>
  );
}

export default App;
