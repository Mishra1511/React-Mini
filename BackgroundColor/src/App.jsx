import { useState } from 'react'
import { Button } from './components/Button'
import './App.css'

function App() {
  const colors=['red','blue','yellow','green'];

function handleButtonClick(color){
  document.body.style.backgroundColor = color;
}

  return (
    <div className='App'>
      <h1>BackGround Changer!!</h1>
      {colors.map((color,index)=>(
        <Button onClick={() => handleButtonClick(color)} key={index} color={color}/>
      ))}
      <br/>
      <button className='btn' onClick={() => handleButtonClick('black')}>Back to Normal</button>
    </div>
  )
}

export default App
