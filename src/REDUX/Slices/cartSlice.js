import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart : (state,action)=>{
            const exsitingProduct = state.find(item=>item.id==action.payload.id)
            if(exsitingProduct){
                const remainingProduct = state.filter(item=>item.id!=exsitingProduct.id)
                exsitingProduct.quantity++
                exsitingProduct.totalPrice = exsitingProduct.quantity * exsitingProduct.price 
                state = [...remainingProduct,exsitingProduct]

            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})

            }

        },
        removeCartItem  : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity : (state,action) =>{
            const exsitingProduct = state.find(item=>item.id==action.payload)
            exsitingProduct.quantity++
            exsitingProduct.totalPrice = exsitingProduct.quantity * exsitingProduct.price 
            const remainingProduct = state.filter(item=>item.id!=exsitingProduct.id)
            state = [...remainingProduct,exsitingProduct]
        },
        decQuantity : (state,action) =>{
            const exsitingProduct = state.find(item=>item.id==action.payload)
            exsitingProduct.quantity--
            exsitingProduct.totalPrice = exsitingProduct.quantity * exsitingProduct.price 
            const remainingProduct = state.filter(item=>item.id!=exsitingProduct.id)
            state = [...remainingProduct,exsitingProduct]
        },
        emptyCart : (state,action)=>{
          return  state = []
        }


    }
})
export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer