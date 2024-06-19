import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../reducers/productSlice';

const store = configureStore({
    reducer: {
        products: productsSlice,
    },

});

export default store;