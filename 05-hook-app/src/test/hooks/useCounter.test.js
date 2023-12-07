import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks';

describe('Testing useCounter', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should return counter with value of 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('should increment and decrement the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, decrement } = result.current;

        act(() => {
            increment();
            decrement(2);
        });

        expect(result.current.counter).toBe(99);
    });

    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { reset, increment } = result.current;

        act(() => {
            increment(2);
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
});
