import React from "react";
import {getTodo} from "../../axios";
import TodoContainer from "../../containers/TodoContainer";


class TodoResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
            todoList: []
        }
    }

    componentWillMount() {
        getTodo().then((response) => {
            let allTodos = response.data
            console.log("request:" , allTodos)
            this.props.getTodoResult(allTodos)
            console.log("todoResult",this.props.todoResult)
        });
    }

    render() {
        console.log(this.props.todoResult, "-----------")
        return (
            <div>
                <div>
                    <React.Fragment>
                        <div>
                            {this.props.todoResult.map((todo) =>
                                <TodoContainer
                                    key={todo.id} todo={todo}/>
                            )}
                        </div>
                    </React.Fragment>
                </div>
            </div>
        )
    }

}

export default TodoResult