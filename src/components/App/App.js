import React, { Component } from 'react';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from 'colorPickerOptions.json';
import TodoList from 'components/TodoList';
import initialTodos from 'todos.json';
import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTod = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <Container>
        <Counter />
        <Counter initialValue={10} />

        <Dropdown />

        <ColorPicker options={colorPickerOptions} />

        <TodoList todos={todos} onDeleteTodo={this.deleteTod} />
      </Container>
    );
  }
}

export default App;
