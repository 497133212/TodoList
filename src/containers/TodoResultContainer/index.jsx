import {getTodoResult} from "../../actions";

import {connect} from "react-redux";
import TodoResult from "../../components/TodoResult";


const mapStateToProps = (state) => ({
    todoResult: state.todoResult
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTodoResult: (todoResult) => dispatch(getTodoResult(todoResult))
    }
};

const TodoResultContainer = connect(mapStateToProps, mapDispatchToProps)(TodoResult);
export default TodoResultContainer;