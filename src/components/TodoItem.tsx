import React from 'react';

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
    // children: React.ReactNode,
}

// const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed}) => {
const TodoItem = ({ id, title, completed}: TodoItemProps) => {
    return (
        <li>
            <input type="checkbox" checked={completed} />
            <span>{title}</span>
            <span>&times;</span>
            {/*{children}*/}
        </li>
    );
}

// TodoItem.defaultProps = {};
export default TodoItem;