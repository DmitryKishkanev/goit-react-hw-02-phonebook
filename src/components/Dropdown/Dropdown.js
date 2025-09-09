import React, { Component } from 'react';
import { Container } from 'components/Dropdown/Dropdown.styled';

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <Container>
        <h2>Выпадающее меню</h2>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </Container>
    );
  }
}
