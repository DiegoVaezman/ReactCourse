const { render, screen } = require('@testing-library/react');
const { TodoApp } = require('../../08-useReducer');
const { useTodo } = require('../../hooks/useTodo');

jest.mock('../../hooks/useTodo');

describe('Testing <TodoApp />', () => {
    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'todo1',
                done: true,
            },
            {
                id: 2,
                description: 'todo2',
                done: false,
            },
        ],
        handleDeleteTodo: jest.fn(),
        handleSubmitTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1,
    });

    test('should render component', () => {
        render(<TodoApp />);

        expect(screen.getByText('todo1')).toBeTruthy();
        expect(screen.getByText('todo2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});
