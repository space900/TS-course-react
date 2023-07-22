import React from 'react';
import {Todo} from '../types';

interface TodoItemProps extends Todo{
    removeTodo: (id: Todo['id']) => void,
    toggleTodo: (id: Todo['id']) => void,
    style?: React.CSSProperties,
}

// const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed}) => {
const TodoItem = ({ id, title, completed, removeTodo, toggleTodo, style= {} }: TodoItemProps) => {
    return (
        <li style={{ color: 'green', ...style }}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
            <span>{title}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
            {/*{children}*/}
        </li>
    );
}

export default TodoItem;