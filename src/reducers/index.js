import { combineReducers } from "redux";
import todoForm from './todoForm'
import todoList from './todoList'
import completedTodo from "./completedTodo";
import todoResult from "./todoResult";

export default combineReducers({todoForm, todoList, completedTodo, todoResult})