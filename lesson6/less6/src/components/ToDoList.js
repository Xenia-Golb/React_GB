import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/ToDoActions';
import { removeTodo } from '../actions/ToDoActions';
import { FilterContext } from '../context/FilterContext';
import withFilter from '../hoc/withFilter';

function ToDoList() {
    // Получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext);
    // Применяем фильтр к задачам
    const filteredTodos = withFilter(todos, filter);
    const handleToggleTodo = (id) => {
        // Отправляем действие для изменения статуса задачи
        dispatch(toggleTodo(id));
    }

    return (
        <ul>
            {
                filteredTodos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}

                    >
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))
            }
        </ul>
    )

}
export default ToDoList;