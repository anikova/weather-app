import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// components
import FlexWrapper from '../../components/FlexWrapper';
import { CenteredHeader, StyledLink } from '../../components/SharedComponents';
import HourlyDetails from './HourlyDetails';
import MainDetails from './MainDetails';
import WeeklyDetails from './WeeklyDetails';

const Wrapper = styled.div`
  width: 70vw;
  border: 1px solid gray;
  margin: 0 auto 3rem auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 6px lightgray;
  background: linear-gradient(150deg, #fd746c8c 0%, #3f51b55e 70%);
  padding: 1rem;
`;

const StyledIcon = styled(FaArrowLeft)`
  margin: 1rem;
`;

const CityDetails = () => {
  const { name } = useParams<any>();
  const cities = useSelector((state: any) => state.cities);
  const cityDetails = useSelector((state: any) => state.cityDetails);
  const {
    current: {
      temp,
      weather: { icon },
    },
    hourly,
  } = cityDetails;

  return (
    <>
      <StyledLink href="/">
        <StyledIcon size={30} />
      </StyledLink>
      <Wrapper>
        <CenteredHeader>{name.toUpperCase()}</CenteredHeader>
        <FlexWrapper flexDirection="column" alignItems="center">
          <MainDetails temp={temp} icon={icon} />
          <HourlyDetails hourly={hourly} />
          <WeeklyDetails />
        </FlexWrapper>
      </Wrapper>
    </>
  );
};

export default CityDetails;
