import { useState } from "react";
import {Button} from 'evergreen-ui';

function  Counter(){
    let [count,setCount]=useState(1);
    let [msg,setmsg]=useState(0);

    return <div style=
    {{display:'grid', 
    marginTop:'20px',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    height:'100px'}}>
        <input onChange={e => setmsg(parseInt(e.target.value))} value={msg} type='number' placeholder="Enter the Number"/>
        <br />
        <Button onClick={e => setCount(count+msg)}>Increment</Button>
        <h1>{count}</h1>
        <Button onClick={e => setCount(count-msg)}>Decrement</Button>
    </div>
}

export default Counter;