import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const MainWrapper = styled.section`
  padding: ${({ padding }) => padding};
  margin: 0 auto;
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 700px;
  width: clamp(1024px, 100%, 1150px);
`;
const Layout = () => {
  console.log('In layout');
  const search = useLocation();

  const isHome = (search.pathname = '/');
  return (
    <MainWrapper bg={isHome ? 'rgba(21, 20, 20, 0.25)' : '#fff'} padding={isHome ? '0' : '2rem'}>
      <Outlet />
    </MainWrapper>
  );
};

export default Layout;
