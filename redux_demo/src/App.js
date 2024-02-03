import './App.css';
import{useSelector,useDispatch} from 'react-redux';
import { store } from './ReduxStore/store';
import { increment,decrement } from './ReduxStore/Slices/Counter'; 
import {fetchAllToDos} from './ReduxStore/Slices/TodoSlice'

function App() {

  const currentcount=useSelector(store => store.counter)
  const currentTodo=useSelector(store => store.todos)
 
  const dispatch=useDispatch();
  
  return (
    <div className="App">
      
      <button onClick={() => dispatch(fetchAllToDos())}>Get All the ToDoS</button>

      <h1>Current count is {currentcount}</h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={currentcount>0?()=>dispatch(decrement()):null}>Decrement</button>

      <ul>
        {currentTodo.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
