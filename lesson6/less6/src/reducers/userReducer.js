const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                users: []
            }
        default:
            return state;
    }
}
export default usersReducer