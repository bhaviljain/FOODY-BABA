import { useState } from "react";
import ItemList from "./ItemList";

const RestaurandCategory = ({data , showItems , setshowIndex})=>{

    // console.log(data);
    const handleClick = () =>{
      setshowIndex()
      // setshowIndex(!showItems)
    } 
  return (

    <div className="my-4 p-4 shadow-lg m-20">
      <div className="flex justify-between cursor-pointer"
       onClick={handleClick}
      >
    <span className="font-bold text-center">
      {data.title}
    ({data?.itemCards?.length})
    </span>
    <span>⬇️</span>
    {/* 'https://corsproxy.io/?' */}
    </div>
    {/* <span>{data.type}</span> */}
  {showItems && <ItemList items={data?.itemCards}/>}

    </div>
    //50.33
  )
}
export default RestaurandCategory


//if it has its own state the it is uncontrolled component , if is does not has uts own state its a controlled component