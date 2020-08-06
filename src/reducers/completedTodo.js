const completedTodo = (state = [], action) => {
    switch (action.type) {
        case 'COMPLETED_TODO':
            return state.filter(todo => todo.status === true);
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, status: !todo.status} : todo);
        case'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

export default completedTodo