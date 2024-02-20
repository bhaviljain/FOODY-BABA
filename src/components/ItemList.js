import { useDispatch } from "react-redux";
import { ImgForEach } from "../../utils/constant";
import { addItems } from "../../utils/cartSlice";
const ItemList =({items}) =>{
 console.log(items);
  const dispatch = useDispatch()
 const CartHandle = (item) =>{
 dispatch(addItems(item))
 }
return(
<div>
{items &&
items.map((item)=>(
    <div key={item.card.info.id} className="
    border border-gray-200 border-b-4 p-4 text-left mx-10">
        <div className="flex justify-between">
        <span className="font-bold"> {item.card.info.name} 
        <span className="ml-2 font-bold">- ₹{item.card.info.price/100 || item.card.info.defaultPrice/100 }</span> 
             </span>
             <div>
             <button className="absolute z-40 mx-10 bg-black text-white text-sm"
             
             onClick={()=>CartHandle(item)}>Add + </button>

             <img  className="h-20 relative" src={ImgForEach + item.card.info.imageId}>
                
</img>
</div>
             </div>
             
           
      <div>  {item.card.info.description}</div>
         </div>
))}
</div>
)
}
export default ItemList;