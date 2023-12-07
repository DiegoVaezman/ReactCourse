const { render, screen, fireEvent } = require('@testing-library/react');
const { TodoItem } = require('../../08-useReducer/TodoItem');

describe('Testing TodoItem', () => {
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    test('should show pending todo', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onClickDelete={onDeleteTodoMock}
            />
        );
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe(
            'list-group-item d-flex justify-content-between'
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain(
            'text-decoration-line-through'
        );
    });

    test('should show completed todo', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onClickDelete={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('should call toggleTodo on click span', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onClickDelete={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('should call deleteTodo on click button', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onClickDelete={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button');
        console.log(buttonElement);
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
