import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Image, Para } from '../../../styles/Common.styled';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  background: linear-gradient(
    94.33deg,
    rgba(255, 255, 255, 0.6) 3.19%,
    rgba(255, 255, 255, 0.1) 99.26%
  );
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: -65px;
  margin-bottom: 2rem;
  width: 90%;
  padding: 1rem;
  gap: 0.5rem;
`;

const H2 = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 25px;
  color: ${({ theme }) => theme.black};
`;
const Story = ({ story }) => {
  console.log('Story', story);
  return (
    <Card width="90%">
      <Image src={story.image} alt="about us pic" />
      <Wrapper>
        <H2>{story.heading}</H2>
        <Para fontSize=".875rem">{story.description}</Para>
      </Wrapper>
    </Card>
  );
};

Story.propTypes = {
  story: PropTypes.object,
};
export default Story;
