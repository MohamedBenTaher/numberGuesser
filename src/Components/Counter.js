import React ,{ useState }  from 'react'

const Counter = () => {
 const [value,setValue]=useState(0)
 const Increment=()=>{

    console.log(1);
   setValue(value+1)
 }
 const Decrement=()=>{
    console.log(-1)
    setValue(value-1)
 }
  return (
    <>
    <div>{value}</div>
   <button onClick={()=>Increment()}> Increment</button>
   <button onClick={()=>Decrement()}> Decrement</button>
   </>
  )
}

export default Counter