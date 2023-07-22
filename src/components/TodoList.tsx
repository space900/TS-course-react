import TodoItem from "./TodoItem";
import {Todo} from "../types";


interface TodoListProps {
    list: Todo[],
    removeTodo: (id: Todo['id']) => void,
    toggleTodo: (id: Todo['id']) => void,
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
    return (
        <ul>
            {list.map((todo) => (
                <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList;