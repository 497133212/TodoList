import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import CompletedTodoLContainer from "./containers/CompletedTodo";
import TodoListContainer from "./containers/TodoListContainer";
import {getTodo} from "./axios";
import TodoResult from "./components/TodoResult";
import TodoResultContainer from "./containers/TodoResultContainer";

function App() {

    const todoList = {
        "id": "46",
        "content": "ttttttttttttttttttttttttt",
        "status": false
    }

    // const deleteTest = () => {
    //     return deleteTodo(todoList);
    // }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Router>
                        <ul>
                            <li>
                                <Link to="/completedTodoList">CompletedTodoList</Link>
                            </li>
                            <li>
                                <Link to="/">TodoList</Link>
                            </li>
                            <li>
                                <Link to="/todoResult">TodoResult</Link>
                            </li>

                        </ul>

                        <Route path="/completedTodoList" component={CompletedTodoLContainer}/>
                        <Route path="/todoResult" component={TodoResultContainer}/>
                        <Route exact path={"/"} render={() => {
                            return (
                                <div>

                                    <TodoListContainer/>
                                    <TodoFormContainer/>
                                </div>
                            )
                        }}/>
                    </Router>
                </div>
            </header>
        </div>
    );
}

export default App;
