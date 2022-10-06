import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const MainWrapper = styled.section`
  padding: ${({ padding }) => padding};
  margin: 0 auto;
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 700px;
  width: clamp(290px, 100vw, 1150px);
  overflow-x: hidden;
  padding: 0.75rem;
  ${mobile({
    width: '100%',

    minWidth: '290px',
    padding: '2rem',
  })}
`;
const Layout = () => {
  console.log('In layout');
  const search = useLocation();

  const isHome = search.pathname === '/';
  console.log('Home', isHome);
  return (
    <MainWrapper bg={isHome ? 'rgba(21, 20, 20, 0.25)' : '#fff'} padding={isHome ? '0' : '2rem'}>
      <Outlet />
    </MainWrapper>
  );
};

export default Layout;
