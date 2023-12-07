import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples';
import { useFetch, useCounter } from '../../hooks';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Testing <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show default component', () => {
        useFetch.mockReturnValue({
            data: null,
            hasError: null,
            isLoading: true,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show a Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Diego', quote: 'Hola mundo' }],
            hasError: null,
            isLoading: false,
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Diego')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call increment function', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Diego', quote: 'Hola mundo' }],
            hasError: null,
            isLoading: false,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});
