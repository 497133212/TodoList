import TodoForm from "../../components/TodoForm";
import {connect} from "react-redux";
import {addTodo} from "../../actions";

const mapDispatchToProps = (dispacth) => ({
    addTodo: (todo) => dispacth(addTodo(todo))
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;