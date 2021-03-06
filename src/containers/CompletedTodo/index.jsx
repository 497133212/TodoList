import {connect} from "react-redux";
import CompletedTodoList from "../../components/CompletedTodoList";

const mapStateToProps = (state) => ({
    completedTodo: state.todoList.filter(todo => todo.status === true)
});

const CompletedTodoLContainer = connect(mapStateToProps)(CompletedTodoList);
export default CompletedTodoLContainer;