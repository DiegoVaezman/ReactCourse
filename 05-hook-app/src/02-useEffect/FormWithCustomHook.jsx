import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, username, email, password } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />
            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type='email'
                className='form-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type='password'
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />
            {username === 'diego' && <Message />}

            <button className='btn btn-primary mt-3' onClick={onResetForm}>
                Borrar
            </button>
        </>
    );
};
