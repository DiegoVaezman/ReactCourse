import React from 'react';

export const TodoItem = ({ todo, onClickDelete, onToggleTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span
                aria-label='span'
                className={`align-self-center ${
                    todo.done ? 'text-decoration-line-through' : ''
                }`}
                onClick={() => onToggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
            >
                {todo.description}
            </span>
            <button
                className='btn btn-danger'
                onClick={() => onClickDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};
