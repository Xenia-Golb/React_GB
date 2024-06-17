// Функция высшего порядка для фильтрации списка задач
const withFilter = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'active':
            return todos.filter(todo => !todo.completed)
        case 'completed':
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}
export default withFilter;