import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { SearchIcon } from '../../../components/icons';
import { InputEle } from '../../../styles/Common.styled';
import { media, mobile } from '../../../styles/responsive';

const SearchWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 2rem 0;
  justify-content: 'flex-start';
  background: linear-gradient(
    94.43deg,
    rgba(249, 249, 249, 0.49) 34.95%,
    rgba(249, 249, 249, 0.175) 67.01%
  );
  padding: 1rem;
  border-radius: 10px;
  width: 90%;

  ${mobile({
    flexFLow: 'row nowrap',
    margin: '3rem 0',
    width: 'auto',
  })}
`;

const FormControl = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  margin: ${({ margin }) => margin || 'unset'};
  ${mobile({
    flexFlow: 'row nowrap',
    // padding: '10px',
  })}
`;
const Span = styled.span`
  position: absolute;
  top: ${({ top }) => top || '6px'};
  left: ${({ left }) => left || '12px'};
  color: ${({ theme }) => theme.black};
  font-size: 12px;
  line-height: 17px;
  font-weight: 500;

  ${mobile({
    top: '7px',
    left: '12px',
  })}
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  ${mobile({
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '.1rem',
  })}

  ${({ theme }) => theme.tablet`
  `}
`;
const SearchForm = () => {
  console.log('Media', media);
  return (
    <SearchWrapper>
      <Form action="">
        <FormControl>
          <Span>CITY</Span>
          <InputEle
            width="100%"
            height="50px"
            padding=".75rem"
            paddingTop="2rem"
            color={'#000'}
            placeholder="Select your city"
            backgroundColor={'#fff'}
            fontSize="1rem"
            borderRadius="1rem"
            fontWeight="700"
            margin="0 .75rem .5rem 0"
          />
        </FormControl>
        <FormControl>
          <Span color={'#6D6D6D'}>DATE</Span>
          <InputEle
            width="100%"
            height="50px"
            padding=".75rem"
            paddingTop="2rem"
            color={'#000'}
            placeholder="Select your dates"
            backgroundColor={'#fff'}
            fontSize="1rem"
            fontWeight="700"
            margin="0 .75rem .5rem 0"
            borderRadius="1rem"
          />
        </FormControl>
        <FormControl>
          <Span color={'#6D6D6D'}>CITY</Span>
          <InputEle
            borderRadius="1rem"
            width="100%"
            height="50px"
            padding=".75rem"
            paddingTop="2rem"
            color={'#000'}
            backgroundColor={'#fff'}
            fontSize="1rem"
            fontWeight="700"
            placeholder="Add your guests"
            margin="0 0 .5rem 0"
          />
        </FormControl>
        <Button
          borderRadius="1rem"
          border="none"
          background="linear-gradient(90deg, #FF594C 0%, #FAC527 100%)"
          width="100%"
          height="50px"
          fontSize="1.2rem"
          fontWeight="500">
          {' '}
          <span>
            <SearchIcon />
          </span>
          Search
        </Button>
      </Form>
    </SearchWrapper>
  );
};

export default SearchForm;
