import React, { useEffect, useState } from "react";

const UseOfffOn = () => {
    const [OnOffbtn , setOnOffbtn] = useState(true);
useEffect(()=>{
    window.addEventListener('offline',()=>{
     setOnOffbtn(false)
    })
    window.addEventListener('online' ,()=>{
    setOnOffbtn(true)
    })
},[])
return OnOffbtn

}
export default UseOfffOn;