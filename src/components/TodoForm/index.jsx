import React from 'react';
import {Input} from 'antd';
import {postTodo} from "../../axios";

const {Search} = Input;

class TodoForm extends React.Component {

    render() {
        return (
            <div>
                <Search
                    placeholder="Please input content"
                    enterButton="Add"
                    size="middle"
                    onSearch={(value) => this.handleSubmit(value)}
                />
            </div>

        )
    }

    handleSubmit = content => {
        let todo = {
            content: content,
            status: false
        }

        postTodo(todo).then((response) => {
            if (response.status === 201) {
                this.props.addTodo(response.data)
            }
        });

    }

}

export default TodoForm;