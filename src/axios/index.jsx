import axios from "axios";

let url = "https://5e9ec500fb467500166c4658.mockapi.io/todos"


export const getTodo = async () => {
    try {
        const response = await axios.get(url);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const postTodo = async (todo) => {
    console.log("post")
    try {
        const response = await axios.post(url, todo);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const putTodo = async (todo) => {
    try {
        const response = await axios.put(url + "/" + todo.id, todo);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteTodo = async (todo) => {
    try {
        const response = await axios.delete(url + "/" + todo.id);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}


