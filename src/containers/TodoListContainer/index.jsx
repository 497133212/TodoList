import {connect} from "react-redux";
import TodoList from "../../components/TodoList";
import {getTodoList} from "../../actions";

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
    getTodoList: (todoList) => dispatch(getTodoList(todoList))
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer



