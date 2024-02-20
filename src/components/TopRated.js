import React, { useState } from 'react'
import { CDN_URL } from "../../utils/constant";

const TopRated = (propss) => {
const {resdata2} = propss

// console.log(resdata2);

  return (
    <>
    <div className="p-4 w-[215px] bg-gray-200 rounded-lg hover:bg-gray-400 h-[90%]">

       <img className=" rounded-md h-[70%] w-[100%]" src={ CDN_URL 
      + resdata2.info.cloudinaryImageId 
     } />
                      <h3 className='font-bold'>{resdata2.info.name}</h3>
                       {/* <h3>{resdata2.info.cuisines.join(" ,")}</h3>
                      <h3>{resdata2.info.avgRating}</h3> */}
                      <h3 className='font-semibold'>{resdata2.info.costForTwo}</h3>
                      <h3 className='text-xs font-serif'>{resdata2?.info?.aggregatedDiscountInfoV3?.header}</h3>
                      <h3 className='text-xs font-light'>{resdata2?.info?.aggregatedDiscountInfoV3?.subHeader|| "No Offers Availabe Currently"} </h3>
                
                      
                      

    </div>
    </>
  )
}

export default TopRated


