import {createSlice} from '@reduxjs/toolkit';
import {Item} from "@/api/item";

interface CartState {
    items: Array<Item>
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setToCart:(state, action: {payload: Item}) => {
            state.items = [...state.items, action.payload]
        },
        clearCart:(state) => {
            state.items = []
        }
    }
});

export const { setToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;