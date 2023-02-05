import { useState } from "react";

const TodoItem = ({todos, editingTodo, handleDelete, handleEdit, handleUpdate, handleComplete }) => {
    const [editingText, setEditingText] = useState('');

    return (
        <div className="todos">
            {todos.length > 0 && todos.map(({ text, id, completed }, index) => (
                <div className="todo" key={index}>
                    <div className="todo-title">
                        <input type="checkbox" id="completed" defaultChecked={completed} onChange={()=> handleComplete(id)} />
                        {id === editingTodo ?
                         <input type="text" onChange={e => setEditingText(e.target.value)} />
                         :
                         <div style={{textDecoration: completed ? 'line-through' : 'auto'}}>{text}</div>
                        }
                    </div>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    {id === editingTodo ?
                        <button onClick={() => handleUpdate(id, editingText)}>Update</button>
                        :
                        <button onClick={() => handleEdit(id)}>Edit</button>
                    }
                </div>
            ))}
        </div>
    );
}

export default TodoItem;
