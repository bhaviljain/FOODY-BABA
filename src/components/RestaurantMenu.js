import React, { useEffect, useState} from 'react'
import Shimmer from "./shimmer"
import { recMenuUrl } from '../../utils/constant'
import { useParams } from 'react-router-dom'
import { RecMenu } from '../../utils/constant' 
import UseResMenu from './useResMenu'
import RestaurandCategory from './RestaurantCategory'

export const RestaurantMenu = () => {

    const [showIndex , setshowIndex] = useState(null)
   const {resid} = useParams();
const resInfo = UseResMenu(resid)


  //  console.log(params);s
    // console.log(resid);
    // useEffect(()=>{
    //  fetchData()
    // },[])
 
    //   const fetchData = async () => {
    //  const data =await fetch(RecMenu + resid)
     
    // //  ("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=true&third_party_vendor=1")
     
    //  const res =await data.json()
    //  console.log(res);
    //  setresInfo(res.data)
    // }
    
   if(resInfo === null)
   return <Shimmer />
  //  console.log(RecMenu);

    const {name,avgRating ,costForTwo,cuisines,totalRatingsString,cloudinaryImageId,areaName} =
    resInfo?.cards[0]?.card?.card?.info ||
    resInfo?.cards[1]?.card?.card?.info ||
    resInfo?.cards[2]?.card?.card?.info ||
    resInfo?.cards[3]?.card?.card?.info ||
    resInfo?.cards[4]?.card?.card?.info ||
    resInfo?.cards[5]?.card?.card?.info;


     
  //  const {itemCards} = 
  //  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
  const cater = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") 
  
//   || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
  
// "type.googleapis.com/swiggy.presentation.food.v2.Dish"
//   )

  //type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  
    return ( 


    <div className='text-center'>


  

    {/* <h3 className='res-menu'>{cloudinaryImageId}</h3> */}
     <h3 className='font-bold' id='name'>{name}</h3> 
     <div className='Header'>
      <div className='Rating-avgrating-costfortwo'> 
      <div className='AvgandTotal'>
    <h3 className='res-menu '>⭐{avgRating}</h3>  &nbsp; &nbsp; 
    <h3 className='res-menu'>({totalRatingsString} + Ratings)</h3> &nbsp; &nbsp; 
    <h3 className=''>Cost For Two : {costForTwo/100}
    </h3>   
    </div>
    </div> 
    <div className='cuisine'>
    <h3 className='res-menu'>{cuisines.join(" , ")}</h3>
    </div>
    <h3 className='res-menu' id='areaName'><span className='outlet'>Outlet &nbsp; &nbsp; </span>{areaName}</h3> 
</div>
    { cater &&
    cater.map((category,index)=>
<RestaurandCategory 
key={category?.card?.card.title}
data ={category?.card?.card}
showItems = {index === showIndex ?true : false}
setshowIndex = {()=>setshowIndex(index)}

/>
)}
</div>

    /* <h3 className='h1'>Recommended</h3>

 <div className='RECMENU'>
  <div className='RECTEXT'>
{itemCards?.map((recommendedMenuList)=>(
  <div className='RECLI'>
<li key={recommendedMenuList.card.info.name}>
  {recommendedMenuList.card.info.name} {"RS: "} - { recommendedMenuList.card.info.price/100 
} - {recommendedMenuList.card.info.description}
<button className='RECaddtocart'> ADD </button>

<img className='RecMenuPic' src={recMenuUrl + recommendedMenuList.card.info.imageId}  />
</li>
</div>
))}
</div>
</div> */

     
    
    
  )
}
