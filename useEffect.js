import React,{useEffect,useState} from 'react'

const UseEffect = () => { 
  
  const [count,setCount] = useState(0);
  const [clicked,setClicked] = useState();
   useEffect(()=>{
  //code to run after render or update
  console.log("We're in Use State")
  //this return will be used as clean up
  //on every click this return statement will be printed first and then the next statement
  //so we have seen after we give the logic return statement will run first and then the other statements
  return(
    ()=>{
      console.log("return of use state")
    }
  )
  },[clicked,count])
  //this above function is dependent on dependency
  return (
    <div>
        <button onClick={()=>setClicked('Subscribe')}>Subscribe</button>
        <br/>
        <hr/>
        <button onClick={()=>setClicked('To')}>To</button>
        <br/>
        <hr/>
        <button onClick={()=>setClicked('My Channel')}>Newsletter</button>
        <br/>
        <hr/>
        <h1>{clicked}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect