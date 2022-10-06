import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { exploreContent } from '../../exploreContent';
import { mobile } from '../../styles/responsive';
import RoomDescription from './components/RoomDescription';

const ExploreWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 1.5rem;
`;

const H1 = styled.h1`
  font-family: 'Evo 2', sans-serif;
  font-size: 30px;
  font-weight: '700';
  line-height: 30px;

  ${mobile({
    fontSize: '50px',
    lineHeight: '55px',
  })}
`;

const Para = styled.p`
  font-family: 'Ubuntu', sans-serif;
  line-height: 14px;
  font-size: 0.871rem;
  text-align: left;
  padding-right: 4rem;

  ${mobile({
    fontSize: '1rem',
    lineHeight: '1rem',
  })}
`;

const CardWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;

  ${mobile({
    flexFlow: 'row',
    gap: '2rem',
    justifyContent: 'flex-start',
  })}
`;

const Explore = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    console.log('UseEffect');
    setRooms(exploreContent);
  }, []);

  console.log('ROoms', rooms);
  return (
    <ExploreWrapper>
      <Header>
        <H1>Explore</H1>
        <Para>From one-guest rooms to penthouses with pools and gardens </Para>
      </Header>
      <CardWrapper>
        {rooms?.map(elem => (
          <RoomDescription key={elem.id} room={elem} />
        ))}
      </CardWrapper>
    </ExploreWrapper>
  );
};

export default Explore;
