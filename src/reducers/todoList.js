const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                content: action.content,
                status: action.status
            }]
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, status: !todo.status} : todo);
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'GET_TODO_LIST':
            return action.todoList;
        default:
            return state;
    }
};
export default todoList;