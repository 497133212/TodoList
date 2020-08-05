const todoResult = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODO':
            return action.todoResult;
        default:
            return state;
    }
};
export default todoResult;