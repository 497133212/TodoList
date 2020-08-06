import axios from "axios";

let url = "http://localhost:8080/todos"


export const getTodo = () => {
    try {
        const response = axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const postTodo = async (todo) => {
    console.log("post")
    try {
        const response = await axios.post(url, todo);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const putTodo = async (todo) => {
    try {
        const response = await axios.put(url + "/" + todo.id, todo);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(url + "/" + id);
        return response;
    } catch (error) {
        console.log(error);
    }
}
