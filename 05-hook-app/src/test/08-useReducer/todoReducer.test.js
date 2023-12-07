import { todoReducer } from '../../08-useReducer/todoReducer';

describe('Testing todoReducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'Demo todo',
            done: false,
        },
    ];
    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('should return a todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false,
            },
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should remove a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('should do toggle todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
    });
});
