import React,{useState} from 'react';
import "../css/Counter.css";
export default function Counter() {
  const[count,setCount]=useState(0);
        const incrementCount=()=>{
            setCount(count+1);
    
        };
        const decrementCount=()=>{
            setCount(count-1);
        };
        const resetCount=()=>{
            setCount(0);
        };
  return (
    <div>
    <div className="container">
        <div className="counter-box">
            <h1>Counter:{count}</h1>
            <div className='button-container'>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={resetCount}>reset</button>
            </div>
        </div>
    </div>
    </div>
  )
}

