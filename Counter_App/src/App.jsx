import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = ()=>{
    counter = counter + 1;
    setCounter(counter);
  }
  const removeValue = ()=>{
    setCounter(counter-= 1);
  }
  const resetValue = () =>{
    if (counter !== 0) {
      setCounter(counter = 0)
    }
  }

  return (
    <div className='main'>
     <h2 className='head'>Counter value : {counter}</h2>

     <div className="button">
     <button id='btn' onClick={addValue}>Increase value</button>
     <button id='btn' onClick={removeValue}>Decrease value</button>
     </div>
     <button id='btn' onClick={resetValue}>Reset</button>
    </div>
  )
}

export default App
