import RestaurantCard ,{WithPromotedLabel} from "./Restaurandcard"
import { Component, useEffect, useState ,useContext} from "react"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom"
import UseOfffOn from "./useOfffOn"
import UserContext from "../../utils/userContext"
import TopRated from "./TopRated"
const Body = () =>{
  const [listofres , setlistofres] = useState([])
  const [searchText , setsearchText] = useState([])
  const [filteredRestaurant , setfilteredRestaurant] = useState('')
  const[top , setTopRated] =  useState([])
// console.log(listofres);
 const RestaurandPromotedLabel = WithPromotedLabel(RestaurantCard)
  // useEffect(()=>{
  //   fetchData();
  // }, [])

  // const fetchData = async () =>
  // {
  //   const res =  await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=19.117753&lng=72.8737017")
  //     {
  //       {headers: {Accept: 'application/json'}}
  //     }

  //   const data = await res.json()
  //   console.log(data);
 
  //   setlistofres(data?.data?.cards[2])
 
  // }
  useEffect(() => {
    fetchData();
    
    
  });
const fetchData = async () => {
    const data = await fetch
    // ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.247731&lng=72.8689019&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // ( "https://www.swiggy.com/mapi/homepage/getCards?lat=19.1635793&lng=72.8458804")
      //  "https:www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
      
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
      
    

    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setlistofres(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
  
      setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
      setTopRated(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
      
  const OnlineStatus = UseOfffOn(true);
  const {setUsername , loggedUser} = useContext(UserContext)


  if(OnlineStatus === false)
  {
   return <h2>Bad Internet Connection. Please Check your internet</h2>
  }

    if(listofres && listofres.length === 0)
    {
      return <Shimmer />
    }

  return(
      <div className="body">
        <button
        onClick={()=>{
          const filtered = filteredRestaurant &&
          filteredRestaurant.filter((res)=>{
        return res.info.avgRating >= 4.7;
        })
        setfilteredRestaurant(filtered)
        console.log(filtered);

      }}
        >Top Rated Restaurant
        </button>

        <div className="Filter">
         
        
        <div className="">
          <input type="text" 
          data-testid = "searchInput"
          className="border
          border-solid border-black"
          value={searchText}
            onChange={(e)=>{
            setsearchText(e.target.value)
            }} />

            
          <button className="border-solid border-2 border-black ml-2 px-4 py-0"
            onClick={()=>{
          const DataFilter = filteredRestaurant &&
          filteredRestaurant?.filter((res)=> 
           res?.info?.name?.toLowerCase()?.includes?.(searchText?.toLowerCase())
            )
         setfilteredRestaurant(DataFilter)             
            }}
            >
              SEARCH
            </button>
          
            
        </div>
        <div className="flex">
         <label>UserName:</label>
         <input className="border border-black"
         value={loggedUser}
         onChange={(e)=> setUsername(e.target.value)}
         /> 
        </div>
        </div>
        
        <div className="flex flex-wrap justify-center"> 
         { filteredRestaurant  &&
        filteredRestaurant.map((restaurant) =>  (              //info was taken from restaurand card info, sab restaurant ke list ke under likha hu hai
            <Link 
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}> 

{
  restaurant.info.isOpen ? (<RestaurandPromotedLabel  resData ={restaurant} />)
  : (<RestaurantCard  resData ={restaurant}/>
  )}

    
               {/* //using index is not recommend */}
               </Link>
         ))}      
</div>
<h1 className="font-bold text-2xl flex justify-center">Top Restaurant Near You</h1>
<div className="mt-[70px] flex flex-wrap justify-evenly toprated">
  {
    top  && top.map((info,index) =>  (              //info was taken from restaurand card info, sab restaurant ke list ke under likha hu hai


     <div key={index}>
     <TopRated resdata2 = {info}
      />
      </div>
    ))
  }
</div>
        </div>        
    )
  }

  
  export default Body

  // <div className="res-container">
  // { filteredRestaurant  &&
  //  filteredRestaurant.map((info,index) =>  (             
  //     <RestaurantCard key={index} resData ={info}/>  

   //info was taken from restaurand card info, sab restaurant ke list ke under likha hu hai
   //git remote remove origin 
