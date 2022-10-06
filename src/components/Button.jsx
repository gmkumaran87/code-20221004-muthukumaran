import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mobile } from '../styles/responsive';

export const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || 'unset'};
  color: ${({ color }) => color || 'unset'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || 'unset'};
  border: ${({ border }) => border || 'none'};
  width: ${({ width }) => width || 'auto'};
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  background: ${({ background, theme }) => background || theme.buttonBgGradient};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${mobile({
    width: '130px',
  })}
`;
const Button = ({
  children,
  margin,
  color,
  height,
  width,
  backgroundColor,
  background,
  borderRadius,
  border,
  cursor,
  fontSize,
  fontWeight,
  padding,
}) => {
  return (
    <ButtonStyle
      margin={margin}
      colorh={color}
      height={height}
      width={width}
      background={background}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      cursor={cursor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}>
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  cursor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};
export default Button;
