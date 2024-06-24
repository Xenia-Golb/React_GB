import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducer/tasksSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
});
