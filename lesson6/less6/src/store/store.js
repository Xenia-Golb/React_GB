// Хранилище - это объект, который содержит состояние приложения и предоставляет методы для его изменения
import { configureStore } from '@reduxjs/toolkit';
import ToDosReducer from '../reducers/ToDosReducer';
import favoritesReducer from '../reducers/favoritesReducer';

// Настройка Redux хранилища с использованием todosReducer
const store = configureStore({
    reducer: {
        todos: ToDosReducer,
        favList: favoritesReducer,
    },

});

export default store;