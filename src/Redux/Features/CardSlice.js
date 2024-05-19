import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts :[]
}
// cart slice

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("first state",action);
             state.carts.push(action.payload);
        },
        // removeFromCart: (state, action) => {
        //     state.carts = state.carts.filter(item => item.id!== action.payload);
        // }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;