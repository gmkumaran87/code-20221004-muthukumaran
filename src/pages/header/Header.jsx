import React from 'react';
import styled from 'styled-components';
// import { Para } from '../../styles/Common.styled';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import DownArrow from '../../assets/images/DownArrow.svg';
import { laptop, mobile } from '../../styles/responsive';

const Wrapper = styled.header`
  width: clamp(290px, 100vw, 100%);
  height: 700px;
  background: url('/main-header.svg'), rgba(21, 20, 20, 0.25);
  background-size: cover;
  background-position: inherit;
  background-blend-mode: hue;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`;

const BodyWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  padding: 1rem;

  ${mobile({
    width: '66%',
    fontSize: '70px',
    margin: '4rem 0',
  })}

  ${laptop({
    width: '55%',
    fontSize: '80px',
  })}
`;

const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ fontFamily }) => fontFamily};

  ${mobile({
    fontSize: '65px',
    fontFamily: "'Exo 2',san-serif",
    lineHeight: '70px',
  })}
`;

export const Para = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: ${({ lineHeight }) => lineHeight || 'unset'};
  text-align: ${({ textAlign }) => textAlign || 'unset'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  margin: ${({ margin }) => margin || '0'};

  ${mobile({
    fontSize: '1.5rem',
    textAlign: 'center',
  })}
`;
const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <BodyWrapper
        direction="column"
        padding=".75rem"
        justifyContent="flex-start"
        width="100%"
        smallScWidth="60%"
        gap="1.5rem">
        <H1
          fontFamily="'Exo 2', san-serif"
          fontSize="42px"
          fontWeight="700"
          lineHeight="50px"
          textAlign="center"
          smallFontSize="30px">
          Rethink your living & renting
        </H1>
        <Para fontFamily="'Ubuntu', sans-serif" fontSize="1rem" fontWeight="700" lineHeight="20px">
          Make stay painless with us
        </Para>
      </BodyWrapper>
      <SearchForm />
      <Image src={DownArrow} alt="Down arrow" width="35px" height="30px" />
    </Wrapper>
  );
};

export default Header;
