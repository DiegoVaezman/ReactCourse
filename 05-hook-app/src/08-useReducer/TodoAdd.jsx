import React, { useRef } from 'react';
import { useForm } from '../hooks';

export const TodoAdd = ({ onSubmitTodo }) => {
    const {
        formState: { description },
        onInputChange,
        onResetForm,
    } = useForm({
        description: '',
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (description.length) {
            const newTodo = {
                id: new Date().getTime(),
                description,
                done: false,
            };
            onSubmitTodo(newTodo);
            onResetForm();
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type='text'
                placeholder='¿Qué hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button type='submit' className='btn btn-primary mt-2'>
                Agregar
            </button>
        </form>
    );
};
