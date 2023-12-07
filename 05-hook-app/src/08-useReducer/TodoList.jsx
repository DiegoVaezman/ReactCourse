import React from 'react';
import { TodoItem } from './';

export const TodoList = ({ todos, onClickDelete, onToggleTodo }) => {
    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onClickDelete={onClickDelete}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};
