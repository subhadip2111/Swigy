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