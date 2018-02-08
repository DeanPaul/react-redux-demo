import React from "react";
import {TodoBar, TodoList} from '../../components';
import TodoController from './TodoController';

const Todo = (props) => (
    <TodoController {...props}>
        <TodoBar/>
        <TodoList/>
    </TodoController>

);

export default Todo;


