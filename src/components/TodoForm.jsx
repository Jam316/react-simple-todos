import { useState } from "react";

const TodoForm = ({getPayload}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Enter todo!')
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            text: title,
            completed: false
        }

        setTitle('')
        getPayload(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
