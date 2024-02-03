import { useState } from 'react';
import './App.css'

function ToDoApp(){
const [text,setText]=useState('');
const [todo,setTodo]=useState([]);

function settext(e){
  setText(e.target.value);
}

function handletodo(){
  if(text.trim() !== '')
  setTodo([...todo,{value:text, isCompleted:false, id:Date.now()}]);
  setText('');
}

function isCompletedfucn(index){
  const allTodos=[...todo];
  allTodos[index].isCompleted = !allTodos[index].isCompleted;
  setTodo(allTodos);
}

function deletetodo(index){
  const newtodo=[...todo];
  newtodo.splice(index, 1);
  setTodo(newtodo);
}

  return(
    <div className='ToDoList'>
      
      <h1>TO DO LIST</h1>
      <input 
      onChange={settext} 
      type='text' 
      value={text}
      placeholder='Enter your ToDo...'/>
      <button onClick={handletodo}>Add</button>
    
      {todo.map((index,i) => (
          <li 
          style={{ listStyle:'none', textDecoration: index.isCompleted ? 'line-through' : 'none'}} 
          key={index.id}>
            <input onChange={() => isCompletedfucn(i)} type='checkbox' />
            <span>{index.value}</span>
            <button onClick={() => deletetodo(i)} className='cross'>X</button>
          </li>
      ))}
    </div>
  )
}

export default ToDoApp;