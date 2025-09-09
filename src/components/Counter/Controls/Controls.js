import React from 'react';
import PropTypes from 'prop-types';
import { ControlsContainer } from 'components/Counter/Controls/Controls.styled';

export const Controls = ({ onDecrement, onIncrement }) => (
  <ControlsContainer>
    <button className="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
    <button className="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
  </ControlsContainer>
);

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
