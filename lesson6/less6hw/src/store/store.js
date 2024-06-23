import { configureStore } from '@reduxjs/toolkit';
import productReducer2 from '../reducers/productReducer2';

const store = configureStore({
    reducer: {
        products: productReducer2,
    },

});

export default store;