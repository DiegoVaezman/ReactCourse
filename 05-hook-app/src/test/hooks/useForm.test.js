import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../hooks';

describe('Testing useForm', () => {
    const initialForm = {
        name: 'Diego',
        email: 'diego@gmail.com',
    };

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const {} = result.current;
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('should change name value in form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newValue = 'Juan';
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('should reset form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newValue = 'Juan';
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
