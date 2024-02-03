import './App.css';
import {useState} from 'react';

function App() {
  const [toggle,setToggle]=useState('Show');
  const [inputType, setinputType]=useState('password');

  function handletoggle(){
    if(toggle === 'Show'){
      setToggle('Hide');
      setinputType('text')
    }else{
      setToggle('Show');
      setinputType('password')
    }
  }
  return (
    <div className="App">
      <h1>Password</h1>
      <div className='container'>
        <input type={inputType} placeholder='Enter the password...' />
        <button onClick={handletoggle}>{toggle}</button>
      </div>
      
    </div>
  );
}

export default App;
