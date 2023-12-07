import React from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {
    const {
        todos,
        handleDeleteTodo,
        handleSubmitTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    } = useTodo();

    return (
        <>
            <h1>
                Todo App: {todosCount},{' '}
                <small>pendientes: {pendingTodosCount}</small>
            </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        onClickDelete={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onSubmitTodo={handleSubmitTodo} />
                </div>
            </div>
        </>
    );
};
