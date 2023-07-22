import React, {useState} from 'react';

import {Todo} from './types';
import NewTodoForm from "./components/NewTodoForm";
// import TodoItem from './components/TodoItem';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [] = useState<string[] | null>(null)

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const addTodo = () => {
        const newTodo = {
            id: new Date().toString(),
            title: text,
            completed: false
        }
        if (text) {
            setTodos([newTodo, ...todos]);
            setText('');
        }
    }

    const toggleTodo = (id: Todo['id']) => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                completed: !todo.completed,
            }
        }))
    }

    const removeTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    /*useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data: Todo[]) => {
                setTodos(data);
            })
    }, []);*/

    return (
        <div className="App">
            <NewTodoForm
                value={text}
                onChange={handleInput}
                handleClick={addTodo}
            />
            <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
}

export default App;
