import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    console.log(count);   // we are writing the current state value
    console.log(setCount);  //we are writing a function
    console.log(useState("Hello"))
    const handleClickInc = () =>{
        setCount(count + 1);
    }
    const handleClickDec = () =>{
        setCount(count * count);
    }
  return (
    <div className="App">  
    <h1>{count}</h1>
    <button onClick ={ handleClickInc}>+</button>
    <button onClick ={ handleClickDec}>*</button>
    </div>
  );
}


export default App;