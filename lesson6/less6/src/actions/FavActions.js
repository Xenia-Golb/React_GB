// константы для типов действий
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const UPDATE_FAV = "UPDATE_FAV"


export const addToFav = (text) => ({
    type: ADD_TO_FAV, //тип действия
    payload: { text }, //полезная нагрузка действия
})

export const removeFromFav = (id) => ({
    type: REMOVE_FROM_FAV,
    payload: { id }
})
export const updateFav = (id) => ({
    type: 'UPDATE_FAV',
    payload: { id }
})