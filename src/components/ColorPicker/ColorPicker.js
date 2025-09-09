import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/ColorPicker/ColorPicker.styled';

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
    ),
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <Container>
        <h2 className="ColorPicker__title">Выбор Цвета</h2>
        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </Container>
    );
  }
}
