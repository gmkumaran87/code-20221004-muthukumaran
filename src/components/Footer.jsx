import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Para } from '../styles/Common.styled';
import { mobile } from '../styles/responsive';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;

  ${mobile({
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
  })}
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};

  ${mobile({
    marginBottom: '1.5rem',
  })}
`;
const First = styled.div`
  ${mobile({
    flex: '3',
  })}
`;

const LinkContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  ${mobile({
    flex: 7,
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
  })}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
`;
const Footer = () => {
  return (
    <Wrapper>
      <First>
        <H1>Rentally</H1>
        <Para fontSize=".75rem" margin="0 0 .25rem 0">
          &copy; 2021 Rentally Company
        </Para>
        <Para fontSize=".75rem">All rights reserved</Para>
      </First>

      <LinkContainer>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/">Cities</NavLink>
      </LinkContainer>
    </Wrapper>
  );
};

export default Footer;
