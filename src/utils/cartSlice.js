import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items=[]
        }, removedItem: (state,action) => {
            
            state.items.pop()
        }
    }
})

// i will modify my cart using Reducer-Function

//the state is the initial state and action is the data
//action.payload == recive the data
/**
 * cart slice is an reducer which return obj
 */

export const {addItem,removedItem,clearCart}=cartSlice.actions
export default cartSlice.reducer