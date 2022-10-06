import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Header from '../../styles/Common.styled';
import { Flex, H1, Para } from '../../styles/Common.styled';
import Story from './components/Story';
import { aboutUs } from '../../exploreContent';
import { mobile } from '../../styles/responsive';

// const MainWrapper = styled.section``;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: '2rem';

  ${mobile({
    flexFlow: 'row wrap',
    gap: '2rem',
    justifyContent: 'flex-start',
  })};
`;

const AboutUs = () => {
  const [stories, setStories] = useState(null);

  useEffect(() => {
    setStories(aboutUs);
  }, []);

  console.log('About Us', stories);
  return (
    <Flex width="100%" direction="column nowrap" gap="2rem" alignItems="center">
      <Flex gap=".75rem" alignItems="center" justifyContent="center" direction="column">
        <H1 fontSize="30px" fontWeight="700" fontFamily="'Exo 2', sans-serif">
          About Us
        </H1>
        <Para fontSize="1rem" fontWeight="700" lineHeight="1rem">
          Allow us to tell you a short story
        </Para>
      </Flex>
      <Container>
        {stories?.map(ele => (
          <Story key={ele.id} story={ele} />
        ))}
      </Container>
    </Flex>
  );
};

export default AboutUs;
