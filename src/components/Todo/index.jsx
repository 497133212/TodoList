import React from "react";
import './../../App.css';
import {deleteTodo, putTodo} from "../../axios";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.todo.content
        }
    }

    render() {
        return (
            <div className="todo-item">
                <li style={{textDecoration: this.props.todo.status ? "line-through" : "none"}}
                    onClick={this.hasDoneToDo}>{this.props.todo.content}</li>
                <button onClick={this.deleteToDo} className="todo_delete">x</button>
            </div>
        )
    }

    hasDoneToDo = () => {
        putTodo(this.props.todo).then((response) => {
            if (response.status === 200) {
                this.props.updateTodo(this.props.todo.id)
            }
        });
    };

    deleteToDo = () => {
        deleteTodo(this.props.todo.id).then(() => {
            this.props.deleteTodo(this.props.todo.id)
        });
    }
}

export default Todo;