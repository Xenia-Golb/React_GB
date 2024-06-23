export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (title, description, price) => ({
    type: "ADD_PRODUCT",
    payload: { title, description, price }
});
export const removeProduct = (id) => ({
    type: "REMOVE_PRODUCT",
    payload: { id }
});