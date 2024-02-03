import { useState, useContext } from 'react'
import './App.css'
import SearchContext from './assets/Store';
import { useEffect } from 'react';

function App() {
  const [search, setSearch] = useState(null);
  const [todos,setTodos]=useState(null);
  const [filteredTodos, setFilteredTodos] = useState(null);

  const load=useEffect(()=>{
    handleToDos();
  },[])

  async function handleToDos(){
    try{
      const url=await fetch('https://jsonplaceholder.typicode.com/todos');
      const response=await url.json();
      setTodos(response);
    } catch(error){
      throw new error(error);
    }
  }
  
  function handleSearch(){
    if (!todos) return;
    const filtered = todos.filter((todo)=>
    todo.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredTodos(filtered);
  }

  return (
    <div>
      <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search...'/> 
      <button onClick={handleSearch}>Search</button>
      {filteredTodos ? 
      
      filteredTodos.map((todo)=>
      <li key={todo.id}>{todo.title}</li>) : 

      todos && todos.map((todo,index)=>
        <li key={todo.id}>{todo.title}</li>)
      }
      
    </div>
  )
}

export default App
