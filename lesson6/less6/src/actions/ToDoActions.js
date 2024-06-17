// константы для типов действий
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

// Создание задачи
export const addTodo = (text) => ({
    type: ADD_TODO, //тип действия
    payload: { text }, //полезная нагрузка действия
})
// Изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
})
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: { id }
})