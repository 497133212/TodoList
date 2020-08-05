import {deleteTodo, updateTodo} from "../../actions";
import Todo from "../../components/Todo";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = (dispatch) => ({
    updateTodo: (id) => dispatch(updateTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer