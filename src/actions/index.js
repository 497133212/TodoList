export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        id: todo.id,
        content: todo.content,
        status: todo.status
    }
}

export function updateTodo(id) {
    return {
        type: "UPDATE_TODO",
        id
    }
}

export function deleteTodo(id) {
    return {
        type: "DELETE_TODO",
        id
    }
}

export function getTodoList(todoList) {
    return {
        type: "GET_TODO_LIST",
        todoList: todoList
    }
}

