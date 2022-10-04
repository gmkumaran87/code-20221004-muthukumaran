import React from 'react';
import styled from 'styled-components';
import { Flex, H1 } from '../../styles/Common.styled';
import Navbar from './components/Navbar';

const Wrapper = styled.section`
  width: 100%;
  height: 700px;
  background-image: url('/main-header.svg');
  object-fit: cover;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <Flex direction="column" padding="3rem" justifyContent="flex-start" width="60%">
        <H1
          fontFamily="'Exo 2' san-serif"
          fontSize="75px"
          fontWeight="700"
          lineHeight="110px"
          textAlign="center">
          Rethink your living & renting
        </H1>
        <p>Make your stay painless with us</p>
      </Flex>
    </Wrapper>
  );
};

export default Header;
