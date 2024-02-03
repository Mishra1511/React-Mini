import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBMI]=useState(0);
  const [str,setStr]=useState();
  const [cond,setCond]=useState();

  function handleCalculation(){
    const num=(weight/(height*height/10000)).toFixed(2);
    setBMI(num);
    
    const bmistr =`Your BMI is: ${num}`;
    setStr(`${bmistr}`);

    if(num<18.5) setCond('Under Weight')
    else if(num>=18.5 && num<=24.9) setCond("Normal Weight")
    else if(num>=25 && num<=29.9) setCond("Over Weight")
    else setCond("Obese")
  }

  return (
      <div className='maindiv'>
        <h1>BMI Calculator</h1>

        <label name='weigth'>Weight (in kg): </label>
        <input required onChange={(e)=>setWeight(parseFloat(e.target.value))} 
        type='number' name='weigth' placeholder='Enter Your Weight...'></input>
        <br/>

        <label name='height'>Height (in cm): </label>
        <input required onChange={(e)=>setHeight(parseFloat(e.target.value))}
        type='number' name='height' placeholder='Enter Your Height...'></input>
        <br/>

        <button onClick={handleCalculation}>Calculate BMI</button>

        <h2>{str}</h2>
        <h2>{cond}</h2>
      </div>
  )
}

export default App
