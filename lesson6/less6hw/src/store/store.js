import { configureStore } from '@reduxjs/toolkit';
import createSlice from '../reducers/createSlice';

const store = configureStore({
    reducer: {
        products: createSlice,

    },

});

export default store;