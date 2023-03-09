import { configureStore } from "@reduxjs/toolkit";
import ActionsliceReducer from "./ActionSlice"

export const store = configureStore({
    reducer:{
        actionslice:ActionsliceReducer,        
    },   
})






