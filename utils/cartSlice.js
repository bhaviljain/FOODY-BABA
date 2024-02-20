import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        index:[],
    },
    reducers:{
        addItems:(state, action)=>{
        state.items.push(action.payload)
        },
        removeItem:(state ,action)=>{
            state.items = state?.items?.filter((removeItemCart)=>removeItemCart.index !==action.payload)


        },
        clearCart:(state,action) =>{
            state.items.length =0;
        }
    }
})

export const{addItems , removeItem , clearCart} = cartSlice.actions
export default cartSlice.reducer;