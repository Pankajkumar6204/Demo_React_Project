import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <div className='ml-[12rem]'>
      <h1 className='text-[32px] text-red-400 font-mono'>Hello mr Pankaj</h1>
      <Card userName='Pankaj' btnText ='Click Me'/>
      <Card userName ='Sahi'/>
    </div>
  )
}

export default App
