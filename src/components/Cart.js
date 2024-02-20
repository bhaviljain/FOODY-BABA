import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from "../../utils/cartSlice";
import { removeItem } from '../../utils/cartSlice';


export const Cart = () => {
    const dispatch = useDispatch()
 const CartItems = useSelector((store)=>store?.cart?.items)
const delItems = useSelector((store)=>store?.cart)
//  const delItems = useSelector((store)=>store?.cart)
 const clearCartClick = ()=>  {
    dispatch(clearCart())
 }
const deleteItemCart =() =>{
    dispatch(removeItem())
}
  return (
    <div className='text-center relative'
    >Cart
        <div>
                <button className='bg-black p-1  hover:bg-white hover:text-black rounded-md text-white'
                onClick={clearCartClick}
                >Clear Cart</button>
                
            {CartItems.length === 0 &&
            <div>
                <h1 className='my-20 font-bold text-5xl'>
                    Your Cart Is Empty 🛒
                </h1>
            </div>
            }
            

            {CartItems.length >= 1 &&
            
                  <button className='text-sm flex absolute right-20 bottom-1' onClick={deleteItemCart}>Remove
                  </button>
                }

        <ItemList items={CartItems} 
        >
            
        </ItemList>

</div>
        </div>
  )
}
