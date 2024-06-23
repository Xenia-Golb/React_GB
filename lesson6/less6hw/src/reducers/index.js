import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer2";

const rootReducer = combineReducers(
    {
        products: productReducer,
    }
)
export default rootReducer;