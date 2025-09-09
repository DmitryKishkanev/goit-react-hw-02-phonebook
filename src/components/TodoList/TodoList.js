import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TodoListBox,
  TodoItem,
} from 'components/TodoList/TodoList.styled';

const TodoList = ({ todos, onDeleteTodo }) => {
  const totalTodoCount = todos.length;
  const completedTodosCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0,
  );

  return (
    <Container>
      <h2>Заметки</h2>
      <p>Общее кол-во: {totalTodoCount}</p>
      <p>Кол-во выполненных: {completedTodosCount}</p>
      <TodoListBox>
        {todos.map(({ id, text }) => (
          <TodoItem key={id}>
            <p>{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
          </TodoItem>
        ))}
      </TodoListBox>
    </Container>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
