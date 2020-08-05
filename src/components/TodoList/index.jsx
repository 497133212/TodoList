import React from "react";
import TodoContainer from "../../containers/TodoContainer";


class TodoList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                {this.props.todoList.map((todo) =>
                    <TodoContainer
                    key={todo.id} todo={todo} />
                )}
                </div>
            </React.Fragment>

        )
    }

}

export default TodoList