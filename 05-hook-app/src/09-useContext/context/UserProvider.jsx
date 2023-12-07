import React, { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     id: 123,
//     name: 'Diego',
//     email: 'diego@nnn.com',
// };

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ setUser, user }}>
            {children}
        </UserContext.Provider>
    );
};
