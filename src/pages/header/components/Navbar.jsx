import React from 'react';
import styled from 'styled-components';
import { Flex, H2 } from '../../../styles/Common.styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../styles/GlobalStyles';

import DownArrow from '../../../assets/images/DownArrow.svg';
import Button from '../../../components/Button';

const UL = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  gap: 1rem;
  padding: 0;
`;
const List = styled.li`
  list-style: none;

  & a {
    color: #fff;
    font-family: 'Exo 2', sans-serif;
  }
`;
// const AnchorTag = styled.a``;

const Navbar = () => {
  return (
    <Flex padding="1rem 2rem" color={theme.white} width="100%">
      <H2>Your Logo</H2>
      <Flex>
        <UL>
          <List>
            <NavLink to="/explore">Explore</NavLink>
          </List>
          <List>
            <NavLink to="/explore">About Us</NavLink>
          </List>
          <List>
            <NavLink to="/cities">
              Cities{' '}
              <span>
                <img src={DownArrow} alt="Down arrow" />
              </span>
            </NavLink>
          </List>
          <List></List>
        </UL>
        <Button
          margin="0 0 0 1rem"
          width="100px"
          height="36px"
          color={theme.white}
          border="2px solid #fff"
          padding=".4rem 1rem"
          borderRadius="5px">
          Call
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
