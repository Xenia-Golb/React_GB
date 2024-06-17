import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "productsList",
    initialState: {
        array: [],
    },
    reducers: {
        addProduct: (state, { payload: newProduct }) => {
            if (state.array.some((item) => item.id === newProduct.id)) {
                return;
            }
            state.array.push(newProduct);
        },
        deleteProduct: (state, { payload: newProduct }) => {
            const filteredArray = state.array.filter(
                (item) => item.id !== newProduct.id
            );
            state.array = filteredArray;
        },
    },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;