
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/productsAction';

const initialState = [
    {
        id: Date.now(),
        title: 'Avokado',
        description: 'This is product 1',
        price: 10.99,
    },
    {
        id: Date.now() + 1,
        title: 'Banana',
        description: 'This is product 2',
        price: 12.99,
    }

];
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,

            },];
        case REMOVE_PRODUCT:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
};
export default productReducer;