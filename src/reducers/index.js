import {combineReducers} from "redux";
import todoList from './todoList'
import completedTodo from "./completedTodo";

export default combineReducers({todoList, completedTodo})