import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// components
import FlexWrapper from '../../components/FlexWrapper';
import {
  CenteredHeader,
  PillLabel,
  StyledLink,
} from '../../components/SharedComponents';
import HourlyDetails from './HourlyDetails';
import MainDetails from './MainDetails';
import WeeklyDetails from './WeeklyDetails';

const Wrapper = styled.div`
  width: 70vw;
  height: 70vh;
  border: 1px solid gray;
  margin: 1rem auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 6px lightgray;
  background: linear-gradient(150deg, #fd746c8c 0%, #3f51b55e 70%);
  padding: 1rem;
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
      <PillLabel>
        <StyledLink href="/">Go back</StyledLink>
      </PillLabel>
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
