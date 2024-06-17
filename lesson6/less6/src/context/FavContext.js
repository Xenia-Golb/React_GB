import React, { createContext, useState } from 'react';

//Создаем контекст для фильтра
export const FavContext = createContext();

export const FavProvider = ({ children }) => {
    // Локальное состояние для хранения текущего фильтра
    const [filter, setFilter] = useState('all');
    return (
        <FavContext.Provider value={{ filter, setFilter }}>
            {children}
        </FavContext.Provider>
    );
}