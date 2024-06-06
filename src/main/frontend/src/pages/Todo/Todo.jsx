import React, {useEffect, useState} from "react";
import axios from "axios";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        axios.get('/todos/all')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    const handleAddTodo = () => {
        axios.post('/todos', {title: newTitle, content: newContent})
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTitle('');
                setNewContent('');
            })
            .catch(error => {
                console.error('Error adding todo:', error);
            });
    };

    return (
        <div>
            <h2>TODO List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.content}</p>
                    </li>
                ))}
            </ul>

            <h3>새로운 TODO 추가</h3>
            <input
                type="text"
                placeholder="제목"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
            />
            <button onClick={handleAddTodo}>추가</button>
        </div>
    );
}

export default Todo;