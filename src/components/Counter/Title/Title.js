import React from 'react';
import PropTypes from 'prop-types';
import { TitleEl } from 'components/Counter/Title/Title.styled';

export const Title = ({ text }) => <TitleEl>{text}</TitleEl>;

Title.propTypes = {
  text: PropTypes.string,
};
