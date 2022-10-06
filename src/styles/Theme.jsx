import React from 'react';
import { ThemeProvider } from 'styled-components';
import { media } from './responsive';
import PropTypes from 'prop-types';

const theme = {
  // Colors
  white: '#fff',
  black: '#000',
  grey: '#6D6D6D',

  // Background
  buttonBgGradient: 'linear-gradient(90deg, #FF594C 0%, #FAC527 100%)',
  wrapperBgGradient:
    'linear-gradient(94.43deg, rgba(249, 249, 249, 0.49) 34.95%, rgba(249, 249, 249, 0.175) 67.01%)',
  buttonWrapperGradient:
    'linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%)',

  // Border radius
  boxRadius: '10px',
};
const Theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        primaryFont: 'Ubuntu',
        ...media,
        ...theme,
      }}>
      {children}
    </ThemeProvider>
  );
};
Theme.propTypes = {
  children: PropTypes.any,
};
export default Theme;
