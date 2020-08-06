import React from "react"
import TodoContainer from "../../containers/TodoContainer";


class CompletedTodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.completedTodo.map((todo) =>
                        <TodoContainer
                            key={todo.id} todo={todo}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default CompletedTodoList