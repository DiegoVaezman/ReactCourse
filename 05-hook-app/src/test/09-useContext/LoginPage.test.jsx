import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../09-useContext/LoginPage';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Testing <LoginPage />', () => {
    const setUserMock = jest.fn();
    const newUser = {
        id: 123,
        name: 'Vaezman',
        email: 'vaezman@gmail.com',
    };

    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('should call setUser when button click', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(setUserMock).toHaveBeenCalledWith(newUser);
    });
});
