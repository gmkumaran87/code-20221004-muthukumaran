import styled from 'styled-components';
// import { theme } from './GlobalStyles';

export const Flex = styled.div `
  display: flex;
  flex-flow: ${({ direction }) => direction || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  gap: ${({ gap }) => gap || 'unset'};
  color: ${({ color }) => color || 'unset'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || 'unset'};
`;

export const H1 = styled.h1 `
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ fontFamily }) => fontFamily};
`;

export const H2 = styled.h2 `
  /* font-family: ${({ fontFamily }) => fontFamily || 'Ubuntu'}; */
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
`;