import { useContext } from "react";
import { CDN_URL } from "../../utils/constant";
import UserContext from "../../utils/userContext";

 const RestaurantCard =(props)=>{
    const {resData} = props;
    // console.log(resData);
    const {loggedUser} = useContext(UserContext)
    return(
      <div data-testid ="resCard" className="m-4 p-4 w-[215px] bg-gray-200 rounded-lg hover:bg-gray-400 h-[90%]">
     <img className=" rounded-md" src={ CDN_URL 
      + resData.info.cloudinaryImageId 
     } />
                <h3 className="font-bold">{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(" ,")}</h4>
                <h3>{resData.info.avgRating}⭐</h3>
                <h3>{resData.info.costForTwo}</h3>
                <h3>{resData.info.areaName}</h3>
                <h3>{resData.info.locality}</h3>
                <h3>{loggedUser}</h3>

                
     
      </div>
    )
  }
  ///high order components are used to enhanced the component , they do not alter the funtions, they are use to add and extra features over a component
export const WithPromotedLabel = (RestaurantCard) =>{
return (props) =>{
  return(
    <>
     <label>Open</label>
    <RestaurantCard {...props}/>
    </>
    
  )
}
}

  export default RestaurantCard

// import { CDN_URL } from "../../utils/constant";

// const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   area,
//   lastMileTravelString,
//   costForTwoString,
//   avgRating,
// }) => {

//   return (
//     <div className="m-3 text-lg max-w-[250px]  p-3 shadow-md  shadow-slate-300 rounded-md flex flex-col flex-wrap">
//       <img
//         className=" rounded-md"
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2 className="text-xl font-bold">{name}</h2>
//       <h4 className="text-sm max-w-[240]">{cuisines?.slice(0,4)?.join(",")}</h4>
//       <h4 className="text-sm">{area}</h4>
//       <span className="text-sm flex justify-between items-center mt-2">
//         <h4>
//           <i className="font-semibold">❇️{avgRating} </i>
//         </h4>
    
//           <h4>{lastMileTravelString}</h4>
//           <h4>{costForTwoString}</h4>
//         </span>
//     </div>
//   );
// };

// export default RestaurantCard;