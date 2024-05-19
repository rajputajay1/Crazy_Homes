import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/CardSlice"

export const store = configureStore(
    {
        reducer: {
            allcart:cartSlice
            
        }
    }
)