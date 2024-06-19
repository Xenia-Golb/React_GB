import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    name: "productsList",
    initialState: {
        products: [
            {
                id: Date.now(),
                title: 'Avokado',
                description: 'Vegetable',
                price: 50,
            },
            {
                id: Date.now(),
                title: 'Tomato',
                description: 'Vegetable',
                price: 70,
            },
            {
                id: Date.now(),
                title: 'Onion',
                description: 'Vegetable',
                price: 30,
            },
            {
                id: Date.now(),
                title: 'Cucumber',
                description: 'Vegetable',
                price: 60,
            }
        ],
    },
    reducers: {
        addProduct: (state, { payload: product }) => {
            if (state.array.some((item) => item.id === product.id)) {
                return;
            }
            state.array.push(product);
        },
        deleteProduct: (state, { payload: product }) => {
            const filteredArray = state.array.filter(
                (item) => item.id !== product.id
            );
            state.array = filteredArray;
        },
    },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;