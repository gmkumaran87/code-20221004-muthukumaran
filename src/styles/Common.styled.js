import styled from 'styled-components';
import { laptop, mobile } from './responsive';

export const Flex = styled.div `
  display: flex;
  flex-flow: ${({ direction }) => direction || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  gap: ${({ gap }) => gap || 'unset'};
  color: ${({ color }) => color || 'unset'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  background: ${({ background }) => background || 'unset'};
  border-radius: ${({ borderRadius }) => borderRadius || 'unset'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || 'unset'};

  ${mobile({
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    padding: '10px',
  })};
`;

export const H1 = styled.h1 `
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ fontFamily }) => fontFamily};

  ${mobile({
    fontSize: '30px',
    fontFamily: 'Exo 2',
  })}
`;

export const H2 = styled.h2 `
  /* font-family: ${({ fontFamily }) => fontFamily || 'Ubuntu'}; */
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
`;

export const Para = styled.p `
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  margin: ${({ margin }) => margin || '0'};
`;

export const InputEle = styled.input `
  color: ${({ color }) => color || 'unset'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || 'unset'};
  padding-top: ${({ paddingTop }) => paddingTop || 'unset'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  border: ${({ border }) => border || 'unset'};
  border-radius: ${({ borderRadius }) => borderRadius || 'unset'};

  &::placeholder {
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
  }

  ${mobile({
    width: '145px',
    marginRight: '.5rem',
  })}

  ${laptop({
    width: '170px',
  })}
`;