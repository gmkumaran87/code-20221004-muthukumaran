import React, { useState } from 'react';
import styled from 'styled-components';
import { H2 } from '../../../styles/Common.styled';
import { Link, useLocation } from 'react-router-dom';

import DownArrow from '../../../assets/images/DownArrow.svg';
import Button from '../../../components/Button';
import { mobile } from '../../../styles/responsive';
import { HamburgerIcon } from '../../../components/icons';

const NavbarContainer = styled.nav`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 0.75rem;
  color: ${({ color }) => color || '#fff'};
`;
const NavWrapper = styled.div`
  display: flex;
  height: 80%;
  ${mobile({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    // width: '100%',
    padding: '10px',
  })};
`;

const LeftSide = styled.div`
  flex: 70%;
  ${mobile({
    flex: '30%',
  })}
`;
const RightSide = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  ${mobile({
    flex: '70%',
  })}
`;

const NavbarLink = styled(Link)`
  color: ${({ color, theme }) => color || theme.white};
  text-decoration: none;
  margin-top: 1rem;
  ${mobile({
    margin: '0',
  })}
`;
const NavbarOuterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 60px;
  right: 0;
  height: calc(100vh - 70px);
  width: 100px;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  gap: 1.2rem;
  padding: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 2s ease;

  ${mobile({
    display: 'none',
  })}
`;
const Span = styled.span`
  font-size: 1rem;

  ${mobile({
    display: 'none',
  })}
`;

const LinkWrapper = styled.div`
  right: 0;
  display: none;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  gap: 1rem;
  ${mobile({
    display: 'flex',
  })}

  & a {
    color: ${({ color }, theme) => color || theme.white};
  }
`;

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <NavbarContainer width="100%" color={!isHome ? '#000' : '#fff'}>
      <NavWrapper>
        <LeftSide>
          <H2>Your Logo</H2>
        </LeftSide>
        <RightSide>
          <LinkWrapper color={!isHome ? '#000' : '#fff'}>
            <NavbarLink to="/explore">Explore</NavbarLink>

            <NavbarLink to="/explore">About Us</NavbarLink>

            <NavbarLink to="/cities">
              Cities{' '}
              <span>
                <img src={DownArrow} alt="Down arrow" />
              </span>
            </NavbarLink>
            <Button
              margin="0 0 0 1rem"
              width="100px"
              height="36px"
              color={'#fff'}
              border="2px solid #fff"
              padding=".4rem 1rem"
              borderRadius="5px">
              Call
            </Button>
          </LinkWrapper>
          <Span onClick={() => setShowSidebar(curr => !curr)}>
            <HamburgerIcon color={isHome ? '#fff' : '#000'} />
          </Span>
        </RightSide>
      </NavWrapper>
      {showSidebar && (
        <NavbarOuterContainer>
          <NavbarLink to="/explore">Explore</NavbarLink>

          <NavbarLink to="/explore">About Us</NavbarLink>

          <NavbarLink to="/cities">
            Cities{' '}
            <span>
              <img src={DownArrow} alt="Down arrow" />
            </span>
          </NavbarLink>
        </NavbarOuterContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
