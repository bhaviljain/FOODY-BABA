import React, { useEffect, useState } from 'react'

export const FunctionComp = (props) => { //destructure bhi kar sakte hai props ki jagah ({name}) aise likhege to
 const [count , cocounter]= useState(0)
 const addVal = ()=> {
    cocounter((prevcounter) => prevcounter +1)
   
   }
   useEffect(()=>{
  //  const timer =  setInterval(()=>{
  //   console.log("Print");
  //   },1000)
    console.log("useEffect");

    return()=>{
    // clearInterval(timer)
    console.log("useEffect closed");
    }

   },[])
   console.log("render");



  return (
    <div>
        {/* aur yaha pe bhi props.name ki jagah sirf {name} */}
<button onClick={addVal}>
    Increase : {count}
</button>
<button onClick={addVal}>
    decrease : {count}
</button>
    </div>
  )
}
