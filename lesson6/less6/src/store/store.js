// Хранилище - это объект, который содержит состояние приложения и предоставляет методы для его изменения
import { configureStore } from '@reduxjs/toolkit';
import ToDosReducer from '../reducers/ToDosReducer';
import { middleware } from '../middleware/middleware';
import { createSagaMiddleware } from 'redux-saga';
import { combineReducers } from 'redux';
import usersReducer from '../reducers/userReducer';
import usersSaga from '../userSaga/userSaga';

// Создание саги 
const sagaMiddleware = createSagaMiddleware();

// Настройка Redux хранилища с использованием todosReducer

const store = configureStore({

    reducer: {
        rootReducer:
            combineReducers({
                todos: ToDosReducer,
                users:
                    usersReducer
            }),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware, sagaMiddleware),

});
sagaMiddleware.run(usersSaga);

export default store;