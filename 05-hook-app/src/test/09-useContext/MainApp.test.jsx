import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainApp from '../../09-useContext/MainApp';

describe('Testing <MainApp />', () => {
    test('should show homepage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('should show homepage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
});
