import { render, screen } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { HomePage } from '../../09-useContext/HomePage';

describe('Testing <HomePage />', () => {
    const user = {
        id: 1,
        name: 'Diego',
    };

    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('should show component with user', () => {
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
    });
});
