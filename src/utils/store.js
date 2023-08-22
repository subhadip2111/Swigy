import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({

    reducer: {
    cart:cartSlice
}

})
export default store

//Stroe should had some slices
/**
 * Create store using -CreateStore -It imports From my RTK
 * Next Step -<provider></provider>My Store
 * 
 */

/**
 * Create  a store 
 * use Configurestore
 * provider my store to the root of thr appp
 * slice 
 * createSlice({
 * name:"",
 * initialState:[],
 * reducers:{
 *   function (state,action)=>{
 * }
 * }
 * 
 * 
 * })--RTK
 * 
 * 
 * 
 * 
 * next step to put this slice inside your store 
 * like 
 * reducer:{
 * cart:"cartSlice",
 * user:"userSlice"
 * 
 * 
 * }
 */