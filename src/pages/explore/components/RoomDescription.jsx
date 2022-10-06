import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mobile, laptop } from '../../../styles/responsive';
import { Para } from '../../../styles/Common.styled';
import Button, { ButtonStyle } from '../../../components/Button';

import SecondImage from '../../../assets/images/third-image-1.svg';
const Card = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  ${mobile({
    width: '310px',
    justifyContent: 'flex-start',
  })}

  ${laptop({
    width: '400px',
    justifyContent: 'center',
  })}
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DescWrapper = styled.div`
  background: linear-gradient(
    94.33deg,
    rgba(255, 255, 255, 0.6) 3.19%,
    rgba(255, 255, 255, 0.1) 99.26%
  );
  backdrop-filter: blur(5px);
  border: 1px solid grey;

  border-radius: 10px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.5rem;
  width: 90%;
  margin: -40px 0 2rem 0;
`;

const DescInnerWrapper = styled.div`
  flex: 70%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  /* padding: 1rem; */
  gap: 0.5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.51rem;
`;
const PriceButton = styled(ButtonStyle)`
  ${mobile({
    width: '40px',
  })}
`;

const RoomDescription = ({ room }) => {
  return (
    <Card>
      <Image src={SecondImage} alt="Room picture" />
      <DescWrapper>
        <DescInnerWrapper>
          <Para fontSize=".7rem">{room.description}</Para>
          <ButtonWrapper>
            <PriceButton
              height="20px"
              width="50px"
              padding={'6px 12px'}
              fontSize=".8rem"
              fontWeight="500"
              borderRadius="6px">
              {room.price}
            </PriceButton>
            <PriceButton
              height="20px"
              width="50px"
              padding={'6px 12px'}
              fontSize=".8rem"
              fontWeight="500"
              borderRadius="6px">
              {room.size}
            </PriceButton>
          </ButtonWrapper>
        </DescInnerWrapper>
        <Button
          width="70px"
          height="30px"
          padding="10px 20px"
          fontSize=".8rem"
          fontWeight="500"
          borderRadius="8px">
          Book!
        </Button>
      </DescWrapper>
    </Card>
  );
};

RoomDescription.propTypes = {
  room: PropTypes.object,
};
export default RoomDescription;
