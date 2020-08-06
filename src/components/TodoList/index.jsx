import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import {getTodo} from "../../axios";


class TodoList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.todoList.map((todo) =>
                        <TodoContainer
                            key={todo.id} todo={todo}/>
                    )}
                </div>
            </React.Fragment>
        )
    }


    componentDidMount() {
        getTodo().then((response) => {
            this.props.getTodoList(response.data.data)
        });
    }
}

export default TodoList