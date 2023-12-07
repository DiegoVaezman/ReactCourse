import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'diego@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <>
            <h1>Formulario Simple</h1>
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
                placeholder='diego@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            {username === 'strider' && <Message />}
        </>
    );
};
