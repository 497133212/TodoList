import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text:''}
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <input type="submit" value="Add"/>
            </form>
        )
    }

    handleChange = event =>{
        this.setState({
            text:event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
    }
}

export default TodoForm;